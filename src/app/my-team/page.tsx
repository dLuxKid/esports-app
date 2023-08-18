'use client'

// HOC
import withAuth from "@/HOC/withAuth"
import AboutTeam from "@/components/AboutTeam/AboutTeam"
// Components
import Banner from "@/components/HeadBanner/Banner"
import PageLoader from "@/components/PageLoader/PageLoader"
// Hooks
import useAccountCheck from "@/hooks/useAccountCheck"


function MyTeam() {

    const { loading } = useAccountCheck('owner', 'only owners can create and manage a team')

    if (loading) return <PageLoader />


    return (
        <>
            <Banner text="your team" />
            <section className="flex-center flex-col gap-4 bg-pry-black">
                <h1 className="title-text uppercase text-pry-white">Team Details</h1>
                <AboutTeam />
            </section>
        </>
    )
}

export default withAuth(MyTeam)