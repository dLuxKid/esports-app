'use client'

// next import
import { useRouter } from "next/navigation"
// react
import { useEffect, useState } from "react"
// components
import Banner from "@/components/HeadBanner/Banner"
import Loader from "@/components/Loader/Loader"
import PageLoader from "@/components/PageLoader/PageLoader"
import SearchBar from "@/components/TeamSearchBar/SearchBar"
import ViewTeam from "@/components/ViewRegisteredTeam/ViewTeam"
// contexts
import { useAuthContext } from "@/contexts/useAuthContext"
// firebase
import { firebaseAuthError } from "@/data/firebaseAuthErrors"
import { db } from "@/firebase"
import { FirebaseError } from "firebase/app"
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore"
// hooks
import useFetchFromCollection from "@/hooks/useFetchFromCollection"
// toast
import { showToast } from "@/functions/toast"
// types
import { collectionTeamType } from "@/types/collectionTypes"

export default function SelectedTournament({ params }: { params: { id: string } }) {
    const { id } = params

    const { loading, tournamentData, fetchSelectedTournament, fetchTeams, teamData } = useFetchFromCollection()

    const { user } = useAuthContext()

    const router = useRouter()

    const [searchField, setSearchField] = useState<string>('')
    const [showBtn, setShowBtn] = useState<boolean>(false)
    const [pending, setPending] = useState<boolean>(false)
    const [selectedTeam, setSelectedTeam] = useState<collectionTeamType | null>(null)
    const [filteredTeam, setFilteredTeam] = useState<collectionTeamType[]>([])

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
        fetchTeams()
        fetchSelectedTournament(id)
    }, [])

    useEffect(() => {
        if (tournamentData && tournamentData?.entries.length >= 20) {
            setShowBtn(false)
            return
        }

        tournamentData?.entries.map((item) => {
            if (item.id === teamData?.id) {
                setShowBtn(false)
                return
            }
        })

    }, [teamData, tournamentData])

    useEffect(() => {

        if (!searchField.length) {
            setFilteredTeam(tournamentData?.entries as collectionTeamType[]);
            return;
        }

        const filtered = tournamentData?.entries.filter((item) =>
            item.teamName.toLowerCase().includes(searchField.toLowerCase())
        )

        if (filtered) {
            setFilteredTeam(filtered)
        }

    }, [tournamentData, searchField]);


    const registerTeam = async () => {

        if (!tournamentData) return

        setPending(true)

        try {
            const tournamentRef = doc(db, "tournaments", tournamentData.id);

            await updateDoc(tournamentRef, {
                entries: arrayUnion(teamData),
            });

            showToast('success', `${teamData?.teamName} successfully registered for the tournament`)

            setPending(false)
            setShowBtn(false)

        } catch (error: any) {

            if (error instanceof FirebaseError) {
                showToast("error", `${firebaseAuthError[error.code]}`);
            } else {
                showToast("error", `${error.message}`);
                console.error(error);
            }

            setPending(false)
        }

    }

    const showTeam = (item: collectionTeamType) => {
        if (selectedTeam) {
            setSelectedTeam(null)
        } else {
            setSelectedTeam(item)
        }
    }


    if (loading) return <PageLoader />

    return (
        <>
            <Banner text="All teams" />
            <section className="flex-between flex-col lg:flex-row gap-[5%]">
                <div className="w-full lg:w-9/12 max-w-4xl flex flex-col gap-4">
                    <SearchBar searchField={searchField} setSearchField={setSearchField} />
                    <div>
                        {!filteredTeam?.length && <p className="body-text">No teams registered in tournament</p>}
                        {filteredTeam?.map((item, i) => (
                            <div className="flex items-center gap-6 p-4 border-b border-b-pry-grey" key={i}>
                                <span className="h-11 w-11 rounded-sm">
                                    <img src={item.photoUrl} alt="team logo" className="w-full h-full" />
                                </span>
                                <p className="body-text cursor-pointer" onClick={() => showTeam(item)}>{item.teamName}</p>
                            </div>
                        ))}
                    </div>
                    {
                        showBtn &&
                        <div className="mt-12">
                            <button type="button" className="btn black-btn" disabled={pending} onClick={() => registerTeam()}>{pending ? <Loader /> : 'Register your team'}</button>
                        </div>
                    }
                </div>

                {selectedTeam && <ViewTeam selectedTeam={selectedTeam} />}
            </section >
        </>
    )
}
