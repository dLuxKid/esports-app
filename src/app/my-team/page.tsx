'use client'

import withAuth from "@/HOC/withAuth"
import PageLoader from "@/components/PageLoader/PageLoader"
import useAccountCheck from "@/hooks/useAccountCheck"


function MyTeam() {

    const { loading } = useAccountCheck('owner', 'only owners can create and manage a team')

    if (loading) return <PageLoader />


    return (
        <div>page</div>
    )
}

export default withAuth(MyTeam)