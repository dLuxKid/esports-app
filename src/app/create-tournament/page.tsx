'use client'

// hooks
import useAccountCheck from "@/hooks/useAccountCheck";
// components
import CreateTournamentForm from "@/components/Form/CreateTournamentForm";
import Loader from "@/components/Loader/Loader";



export default function CreateTournament() {
    const { loading } = useAccountCheck('host', 'Only host accounts can create tournaments')

    if (loading) {
        return (
            <div className="flex-center w-full h-screen">
                <Loader />
            </div>
        )
    }

    return (
        <section className="bg-pry-grey">
            <CreateTournamentForm />
        </section>
    )
}
