"use client";

// react imports
import { useState } from "react";
// firebase imports
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
// types
import { createUserType, loginUserType } from "./../types/authentication.d";
// data
import { firebaseAuthError } from "@/data/firebaseAuthErrors";
// toast
import { showToast } from "@/functions/toast";
// zustand store
import { useAuthStore } from "./../store/index";

const useAuthentication = () => {
  // form states
  const [pending, setPending] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  // store state
  const loginUser = useAuthStore((state) => state.loginUser);
  const logoutUser = useAuthStore((state) => state.logoutUser);

  // signup function
  const signup = ({ email, password, username, thumbNail }: createUserType) => {
    setPending(true);
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const user = userCredentials.user;

        // create image refrence
        const uploadPath = `thumbnails/${user.uid}/${thumbNail?.name}`;
        const projectStorageRef = ref(storage, uploadPath);

        if (thumbNail) {
          // Convert the thumbnail File to Blob
          const thumbnailBlob = new Blob([thumbNail], {
            type: thumbNail?.type,
          });

          // upload to cloud
          await uploadBytes(projectStorageRef, thumbnailBlob);
        }

        // get the photo url
        const url = await getDownloadURL(ref(projectStorageRef));

        // update user profile
        await updateProfile(user, {
          displayName: username,
          photoURL: url,
        });

        // send user data to store
        loginUser(user);

        // update state
        setPending(false);
        setSuccess(true);
      })
      .catch((error) => {
        // handle error
        if (error instanceof FirebaseError) {
          showToast("error", `${firebaseAuthError[error.code]}`);
        } else {
          showToast("error", `${error.message}`);
          console.error(error);
        }
        // update state
        setPending(false);
        setSuccess(false);
      });
  };

  // login function
  const login = ({ email, password }: loginUserType) => {
    setPending(true);
    setSuccess(false);

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        // send user data to store
        loginUser(user);

        // update state
        setPending(false);
        setSuccess(true);
      })
      .catch((error) => {
        // handle error
        if (error instanceof FirebaseError) {
          showToast("error", `${firebaseAuthError[error.code]}`);
        } else {
          showToast("error", `${error.message}`);
          console.error(error);
        }
        // update state
        setPending(false);
        setSuccess(false);
      });
  };

  // log out function
  const logout = async () => {
    setPending(true);

    signOut(auth)
      .then(async () => {
        // dispatch logout
        logoutUser();

        // update state
        setPending(false);
        setSuccess(true);
      })
      .catch((error) => {
        // handle error
        if (error instanceof FirebaseError) {
          showToast("error", `${firebaseAuthError[error.code]}`);
        } else {
          showToast("error", `${error.message}`);
          console.error(error);
        }
        // update state
        setPending(false);
        setSuccess(false);
      });
  };

  return { signup, login, logout, success, pending };
};

export default useAuthentication;
