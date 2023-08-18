// react
import { useState } from "react";
// firebase
import { db } from "@/firebase";
import {
  collection,
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

      setTableData(td);

      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setHasMore(tableData.length === 10);
    });
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

    const querySnapshot = await getDocs(
      query(collection(db, "team"), where("id", "==", user.uid))
    );

    querySnapshot.forEach((doc) => {
      // return error if document does not exist
      if (!doc.exists()) {
        showToast("info", "You have not registered a team");
        router.push("/register-team");
        return;
      }

      setTeamData(doc.data() as collectionTeamType);
    });

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
