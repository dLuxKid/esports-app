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
} from "firebase/firestore";
// toast
import { showToast } from "@/functions/toast";
// types
import { tournamentType } from "@/types/collectionTypes";

export default function useFetchFromCollection() {
  const [loading, setLoading] = useState<boolean>(true);
  const [tableData, setTableData] = useState<tournamentType[]>([]);

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

  return { hasMore, tableData, loadMore, loading, fetchTournaments };
}
