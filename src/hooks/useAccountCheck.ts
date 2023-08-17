"use client";

// next imports
import { useRouter } from "next/navigation";
// react imports
import { useEffect, useState } from "react";
// firebase
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
// context
import { useAuthContext } from "@/contexts/useAuthContext";
// toasts
import { showToast } from "@/functions/toast";

export default function useAccountCheck(type: string, message: string) {
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  const { user } = useAuthContext();

  async function fetchData() {
    setLoading(true);
    if (user) {
      // query firebase db
      const docRef = doc(db, "users", user.uid);
      const querySnapshot = await getDoc(docRef);

      if (!querySnapshot.exists()) {
        router.push("/login");
        throw new Error("no such user");
      }

      const data = querySnapshot.data();

      if (data.accountType !== type) {
        router.push("/");
        showToast("warning", message);
      }

      // set loading to false
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }

  useEffect(() => {
    fetchData();
  }, [user]);

  return { loading };
}
