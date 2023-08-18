'use client'

import useFetchFromCollection from "@/hooks/useFetchFromCollection"

import { useEffect, useState } from 'react'

import Loader from "../Loader/Loader"
import AddPlayerForm from "../Form/AddPlayerForm"

export default function AboutTeam() {

    const { fetchTeams, teamData, loading } = useFetchFromCollection()

    const [showForm, setShowForm] = useState<boolean>(false)

    useEffect(() => {
        fetchTeams()
    }, []);

    if (loading) {
        return (
            <div className="flex-center flex-col gap-4 w-full">
                <h1 className="body-text">Fetching team data</h1>
                <Loader />
            </div>
        )
    }

    return (
        <div className="h-[70vh] w-full">
            <div className="flex items-center gap-4">
                <div className="h-24 w-24">
                    <img src={teamData?.photoUrl} alt="team logo" />
                </div>
                <div>
                    <h1 className="title-text uppercase text-pry-white">{teamData?.teamName}</h1>
                </div>
            </div>
            <div className="mt-8 flex-start flex-col gap-2">
                <p className="title-text text-pry-white">Members</p>
                <ul>
                </ul>
            </div>
            {
                !teamData?.members.length &&
                <div className="mt-12">
                    <p className="tiny-text text-red-600 mb-2">No members in the team</p>
                    <button type="button" className="btn white-btn" onClick={() => setShowForm(true)}>Register Player</button>
                </div>
            }

            {
                teamData?.members.length !== 6 && teamData?.members.length &&
                <div className="mt-12">
                    <button type="button" className="btn white-btn" onClick={() => setShowForm(true)}>Add Player</button>
                </div>
            }

            {showForm && <AddPlayerForm setShowForm={setShowForm} />}
        </div>

    )
}
