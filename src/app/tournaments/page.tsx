'use client'

// next imports
import Link from 'next/link'
// react
import { useEffect, useState } from "react";
// hook
import useFetchFromCollection from "@/hooks/useFetchFromCollection";
// components
import Banner from "@/components/HeadBanner/Banner";
import OutlineTable from "@/components/TournamentTable/OutlineTable";
import PageLoader from '@/components/PageLoader/PageLoader';
import AboutTournament from '@/components/AboutTournament/AboutTournament';
// types
import { tournamentType } from '@/types/collectionTypes';
// context
import { useAuthContext } from '@/contexts/useAuthContext';
// HOC
import withAuth from '@/HOC/withAuth';
// firebase
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase';


function CreateTournament() {

    const { hasMore, loading, tableData, loadMore, fetchTournaments } = useFetchFromCollection()

    const [selectedTourney, setSelectedTourney] = useState<tournamentType | null>(null)

    const { user } = useAuthContext()

    const [showBtn, setShowBtn] = useState<boolean>(false)

    async function fetchData() {
        if (!user) return
        // query firebase db
        const q = query(
            collection(db, "users"),
            where("email", "==", user.email)
        );
        const querySnapshot = await getDocs(q);
        // function to listen for logs
        querySnapshot.docs.map((doc) => {
            const data = doc.data();
            if (data.accountType === 'host') setShowBtn(true)
        })
    }

    useEffect(() => {
        fetchData()
        fetchTournaments(10)
    }, [])

    if (loading) return <PageLoader />


    return (
        <>
            <Banner text="All tournaments" />
            <section className="flex justify-between items-baseline gap-[5%]">
                <div className="w-3/5">
                    <OutlineTable hasMore={hasMore} tableData={tableData} loadMore={loadMore} selectedTourney={selectedTourney as tournamentType} setSelectedTourney={setSelectedTourney} />
                    {
                        showBtn &&
                        <div className='flex-start mt-12'>
                            <Link href={'/create-tournament'}>
                                <button type='button' className="btn cta-btn">Create Tournament</button>
                            </Link>
                        </div>
                    }
                </div>
                {
                    selectedTourney && <AboutTournament selectedTourney={selectedTourney} />
                }

            </section>
        </>
    )
}

export default withAuth(CreateTournament)