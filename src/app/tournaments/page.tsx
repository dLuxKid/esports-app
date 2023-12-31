'use client'

// next imports
import Link from 'next/link';
// react
import { useEffect, useState } from "react";
// hook
import useFetchFromCollection from "@/hooks/useFetchFromCollection";
// components
import AboutTournament from '@/components/AboutTournament/AboutTournament';
import Banner from "@/components/HeadBanner/Banner";
import PageLoader from '@/components/Loader/PageLoader';
import OutlineTable from "@/components/TournamentTable/OutlineTable";
// types
import { collectionTournamentType } from '@/types/collectionTypes';
// context
import { useAuthContext } from '@/contexts/useAuthContext';
// HOC
import withAuth from '@/HOC/withAuth';
// firebase
import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';


function CreateTournament() {

    const { hasMore, loading, tableData, loadMore, fetchTournaments } = useFetchFromCollection()

    const [selectedTourney, setSelectedTourney] = useState<collectionTournamentType | null>(null)

    const { user } = useAuthContext()

    const [showBtn, setShowBtn] = useState<boolean>(false)

    async function fetchData() {
        if (!user) return

        const querySnapshot = await getDoc(doc(db, "users", user.uid));

        if (querySnapshot.exists() && querySnapshot.data().accountType === 'host') setShowBtn(true)
    }

    useEffect(() => {
        fetchData()
        fetchTournaments(10)
    }, [])

    if (loading) return <PageLoader />


    return (
        <>
            <Banner text="All tournaments" />
            <section className="flex justify-between items-baseline flex-col nav:flex-row gap-[5%] min-h-[90vh]">
                <div className="w-full nav:w-3/5 overflow-x-scroll order-2 nav:order-1 mt-8 nav:mt-0">
                    <OutlineTable hasMore={hasMore} tableData={tableData} loadMore={loadMore} selectedTourney={selectedTourney as collectionTournamentType} setSelectedTourney={setSelectedTourney} />
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