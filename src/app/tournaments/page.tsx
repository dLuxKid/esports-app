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
import Loader from "@/components/Loader/Loader";
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

    if (loading) return <div className='w-full h-screen flex-center'><Loader /></div>

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
                    selectedTourney &&
                    <div className="w-full max-w-md bg-pry-green text-pry-white p-12">
                        <div className="flex-start flex-col gap-8">
                            <div>
                                <p className="text-2xl">{selectedTourney.tournamentName}</p>
                            </div>
                            <div className="flex-start w-full gap-4 border-b-pry-white border-b">
                                <p className="font-bold text-[0.9375rem] uppercase">{selectedTourney.mode}</p>
                                <p className="font-bold text-[0.9375rem] uppercase">{selectedTourney.date}</p>
                                <p className="font-bold text-[0.9375rem] uppercase">{selectedTourney.time}</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-[1.125rem] leading-7">MAP</p>
                                <p className="body-text">Alcatraz</p>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className='mt-10 flex-between'>
                            <p>
                                <Link href={'/rules'} className='font-bold text-[0.9375rem]'>The rules</Link>
                            </p>
                            <button type='button' className="btn white-btn h-11">Check in</button>
                        </div>
                    </div>
                }

            </section>
        </>
    )
}

export default withAuth(CreateTournament)