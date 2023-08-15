"use client";

// react imports
import { useState } from "react";
// firebase imports
import { auth, db, storage } from "@/firebase";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// types
import { createUserType, loginUserType } from "./../types/authentication.d";
// data
import { firebaseAuthError } from "@/data/firebaseAuthErrors";
// toast
import { showToast } from "@/functions/toast";
// context
import { useAuthContext } from "@/contexts/useAuthContext";

const useAuthentication = () => {
  // form states
  const [pending, setPending] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  // context state
  const { dispatch } = useAuthContext();

  // signup function
  const signup = ({
    email,
    password,
    username,
    thumbNail,
    accountType,
  }: createUserType) => {
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

        // create user document
        await setDoc(doc(db, "users", user.uid), {
          accountType: accountType,
          displayName: username,
          email: email,
          photoUrl: url,
        });

        // send user data to store
        dispatch({ type: "LOGIN", payload: user });

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
        dispatch({ type: "LOGIN", payload: user });

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
        dispatch({ type: "LOGOUT" });

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
