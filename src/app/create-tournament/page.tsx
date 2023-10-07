'use client'


// components
import CreateTournamentForm from "@/components/Form/CreateTournamentForm";
import useAccountCheck from "@/hooks/useAccountCheck";
import PageLoader from "@/components/Loader/PageLoader";
// HOC
import withAuth from "@/HOC/withAuth";
// hook




function CreateTournament() {
    const { loading } = useAccountCheck('host', 'Use an host account to create tournament')

    if (loading) return <PageLoader />


    return (
        <section className="bg-pry-grey">
            <CreateTournamentForm />
        </section>
    )
}


export default withAuth(CreateTournament)