"use client";

// react imports
import { useState } from "react";
// next imports
import { useRouter } from "next/navigation";
// firebase imports
import { db, storage } from "@/firebase";
import { FirebaseError } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// types
import { teamType, tournamentType } from "../types/collectionTypes";
// data
import { firebaseAuthError } from "@/data/firebaseAuthErrors";
// toast
import { showToast } from "@/functions/toast";
// context
import { useAuthContext } from "@/contexts/useAuthContext";

export default function useAddToCollection() {
  // form states
  const [pending, setPending] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const router = useRouter();

  const { user } = useAuthContext();

  const registerTeam = async ({
    name,
    password,
    sqaudType,
    thumbnail,
  }: teamType) => {
    setPending(true);
    setSuccess(false);

    try {
      // create image refrence
      const uploadPath = `thumbnails/team logos/${thumbnail?.name}`;
      const projectStorageRef = ref(storage, uploadPath);

      if (thumbnail) {
        // Convert the thumbnail File to Blob
        const thumbnailBlob = new Blob([thumbnail], {
          type: thumbnail?.type,
        });

        // upload to cloud
        await uploadBytes(projectStorageRef, thumbnailBlob);
      }

      // get the photo url
      const url = await getDownloadURL(ref(projectStorageRef));

      // check if person already has team
      const q = query(collection(db, "team"), where("id", "==", user.uid));
      const querySnapshot = await getDocs(q);

      // function to listen for logs
      querySnapshot.docs.map((doc) => {
        const data = doc.data();
        console.log(data);

        if (data) {
          router.push("/");
          throw new Error("Cannot own more than one team");
        }
      });

      // create user document
      await setDoc(doc(collection(db, "team")), {
        id: user.uid,
        sqaudType,
        teamName: name,
        pin: password,
        photoUrl: url,
      });

      // update state
      setPending(false);
      setSuccess(true);
    } catch (error: any) {
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
    }
  };

  const createTournament = async ({
    tournamentName,
    code,
    mode,
    map,
    desc,
    number,
    discord,
    twitter,
    thumbnail,
    date,
    time,
  }: tournamentType) => {
    setPending(true);
    setSuccess(false);

    try {
      // create image refrence
      const uploadPath = `thumbnails/tournament logos/${thumbnail?.name}`;
      const projectStorageRef = ref(storage, uploadPath);

      if (thumbnail) {
        // Convert the thumbnail File to Blob
        const thumbnailBlob = new Blob([thumbnail], {
          type: thumbnail?.type,
        });

        // upload to cloud
        await uploadBytes(projectStorageRef, thumbnailBlob);
      }

      // get the photo url
      const logo = await getDownloadURL(ref(projectStorageRef));

      // create tournament document
      await setDoc(doc(collection(db, "tournaments")), {
        id: user.uid,
        tournamentName,
        code,
        mode,
        map,
        desc,
        number,
        discord,
        twitter,
        logo,
        date,
        time,
      });

      // update state
      setPending(false);
      setSuccess(true);
    } catch (error: any) {
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
    }
  };

  return { registerTeam, createTournament, pending, success };
}
