'use client'

import Banner from "@/components/HeadBanner/Banner"
import PageLoader from "@/components/PageLoader/PageLoader"
import SearchBar from "@/components/TeamSearchBar/SearchBar"
import { useAuthContext } from "@/contexts/useAuthContext"
import { db } from "@/firebase"
import useFetchFromCollection from "@/hooks/useFetchFromCollection"
import { doc, getDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function SelectedTournament({ params }: { params: { id: string } }) {
    const { id } = params

    const { loading, tournamentData, fetchSelectedTournament } = useFetchFromCollection()

    const { user } = useAuthContext()

    const router = useRouter()

    const [searchField, setSearchField] = useState<string>('')
    const [showBtn, setShowBtn] = useState<boolean>(false)

    async function fetchData() {
        if (!user) return

        const querySnapshot = await getDoc(doc(db, "users", user.uid));

        if (!querySnapshot.exists()) {
            router.push("/tournaments");
            throw new Error("No valid user");
        }

        if (querySnapshot.data().accountType === 'owner') setShowBtn(true)

    }

    useEffect(() => {
        fetchData()
        fetchSelectedTournament(id)
    }, [])

    if (loading) return <PageLoader />


    return (
        <>
            <Banner text="All teams" />
            <section className="flex-between flex-col lg:flex-row gap-[5%]">
                <div className="w-9/12 flex flex-col gap-4">
                    <SearchBar searchField={searchField} setSearchField={setSearchField} />
                    {tournamentData?.entries.length ? <p>teams</p> : <p>No teams registered in tournament</p>}
                    {
                        tournamentData && tournamentData?.entries.length <= 20 && showBtn &&
                        <div className="mt-12">
                            <button type="button" className="btn black-btn" onClick={() => { }}>Register your team</button>
                        </div>
                    }
                </div>
                <div className="w-1/5">hey</div>

            </section>
        </>
    )
}
