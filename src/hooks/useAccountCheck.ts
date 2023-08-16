"use client";

// next imports
import { useRouter } from "next/navigation";
// react imports
import { useEffect, useState } from "react";
// firebase
import { db } from "@/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
// context
import { useAuthContext } from "@/contexts/useAuthContext";
// toasts
import { showToast } from "@/functions/toast";

export default function useAccountCheck(type: string, message: string) {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { user } = useAuthContext();

  async function fetchData() {
    if (!user) return;
    // set loading state
    setLoading(true);
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
    }, 1000);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading };
}
