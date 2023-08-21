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

export default function SelectedTournament({ params }: { params: { id: string } }) {
    const { id } = params

    const { loading, tournamentData, fetchSelectedTournament, fetchTeams, teamData } = useFetchFromCollection()

    const { user } = useAuthContext()

    const router = useRouter()

    const [searchField, setSearchField] = useState<string>('')
    const [showBtn, setShowBtn] = useState<boolean>(false)
    const [pending, setPending] = useState<boolean>(false)

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


    if (loading) return <PageLoader />

    return (
        <>
            <Banner text="All teams" />
            <section className="flex-between flex-col lg:flex-row gap-[5%]">
                <div className="w-9/12 flex flex-col gap-4">
                    <SearchBar searchField={searchField} setSearchField={setSearchField} />
                    <div>
                        {!tournamentData?.entries.length && <p className="body-text">No teams registered in tournament</p>}
                        {tournamentData && tournamentData?.entries.map((item, i) => (
                            <div className="flex items-center gap-6 p-4 border-b border-b-pry-grey" key={i}>
                                <span className="h-11 w-11 rounded-sm">
                                    <img src={item.photoUrl} alt="team logo" className="w-full h-full" />
                                </span>
                                <p className="body-text">{item.teamName}</p>
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
                <div className="w-1/5">hey</div>

            </section>
        </>
    )
}
