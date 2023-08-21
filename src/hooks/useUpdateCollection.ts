// next imports
import { useRouter } from "next/navigation";
// react imports
import { useState } from "react";
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
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
// data
import { firebaseAuthError } from "@/data/firebaseAuthErrors";
// toast
import { showToast } from "@/functions/toast";
// context
import { useAuthContext } from "@/contexts/useAuthContext";

export default function useUpdateCollection() {
  const [pending, setPending] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const { user } = useAuthContext();

  const addPlayerToTeam = async ({
    email,
    ign,
  }: {
    email: string;
    ign: string;
  }) => {
    setPending(true);
    setSuccess(false);

    try {
      // check if player has an account
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      // function to listen for logs
      querySnapshot.docs.map((doc) => {
        if (!doc.exists()) {
          throw new Error("Player does not have an account");
        }

        const data = doc.data();

        if (data.accountType !== "player") {
          throw new Error("You can only register player accounts");
        }
      });

      const teamRef = doc(db, "team", user.uid);

      await updateDoc(teamRef, {
        members: arrayUnion({ ign, email }),
      });

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

  return { pending, success, addPlayerToTeam };
}
