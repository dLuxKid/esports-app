// react
import { useState } from "react";
// firebase
import { db } from "@/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
// toast
import { showToast } from "@/functions/toast";
// types
import {
  teamType,
  tournamentType,
  collectionTeamType,
} from "@/types/collectionTypes";
// contexts
import { useAuthContext } from "@/contexts/useAuthContext";
// next imports
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";
import { firebaseAuthError } from "@/data/firebaseAuthErrors";

export default function useFetchFromCollection() {
  const router = useRouter();

  const { user } = useAuthContext();

  const [loading, setLoading] = useState<boolean>(true);
  const [tableData, setTableData] = useState<tournamentType[]>([]);
  const [teamData, setTeamData] = useState<collectionTeamType>();

  const [lastDoc, setLastDoc] = useState<any>();
  const [hasMore, setHasMore] = useState<boolean>(false);

  const fetchTournaments = async (number: number) => {
    // set loading state
    setLoading(true);

    try {
      // query firebase db
      const q = query(
        collection(db, "tournaments"),
        orderBy("date", "asc"),
        limit(number)
      );
      // function to listen for logs
      const querySnapshot = await getDocs(q);

      const td: tournamentType[] = [];
      // loop throught the document in audit logs
      querySnapshot.forEach((doc) => {
        // return error if document does not exist
        if (!doc.exists()) {
          showToast("info", "No tournaments available");
          return;
        }

        const data = doc.data();
        td.push(data as tournamentType);
      });

      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setHasMore(tableData.length === 10);
      setTableData(td);
    } catch (error: any) {
      // handle error
      if (error instanceof FirebaseError) {
        showToast("error", `${firebaseAuthError[error.code]}`);
      } else {
        showToast("error", `${error.message}`);
        console.error(error);
      }

      // update state
      setLoading(false);
    }

    // set loading to false
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const loadMore = async () => {
    setLoading(true);

    const q = query(
      collection(db, "tournaments"),
      orderBy("date", "desc"),
      startAfter(lastDoc),
      limit(10)
    );
    const snapshots = await getDocs(q);
    const td: tournamentType[] = [];
    snapshots.docs.map((doc) => {
      const data = doc.data();
      td.push(data as tournamentType);
    });

    setTableData(td);

    setLastDoc(snapshots.docs[snapshots.docs.length - 1]);
    setHasMore(td.length === 10);
    setLoading(false);
  };

  const fetchTeams = async () => {
    setLoading(true);

    try {
      const querySnapshot = await getDoc(doc(db, "team", user.uid));

      if (!querySnapshot.exists()) {
        router.push("/register-team");
        throw new Error("You do not have a team, create a team");
      }

      setTeamData(querySnapshot.data() as collectionTeamType);
    } catch (error: any) {
      // handle error
      if (error instanceof FirebaseError) {
        showToast("error", `${firebaseAuthError[error.code]}`);
      } else {
        showToast("error", `${error.message}`);
        console.error(error);
      }

      // update state
      setLoading(false);
    }

    // set loading to false
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return {
    hasMore,
    tableData,
    teamData,
    loadMore,
    loading,
    fetchTournaments,
    fetchTeams,
  };
}
