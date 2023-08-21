'use client'

// next imports
import Link from "next/link";
// react imports
import { useEffect } from "react";
// components
import OutlineTable from "../TournamentTable/OutlineTable";
import Loader from "../Loader/Loader";
// hooks
import useFetchFromCollection from "@/hooks/useFetchFromCollection";

export default function Tournament() {
    const { loading, tableData, fetchTournaments } = useFetchFromCollection()

    useEffect(() => {
        fetchTournaments(3)
    }, [])

    return (
        <section className="flex-between">
            <div className="flex-start flex-col gap-6 w-1/3 overflow-ellipsis">
                <h1 className="header-text text-pure-black">Upcoming Events</h1>
                <div>
                    <Link href={'/tournaments'}>
                        <button type="button" className="btn black-btn">All tournaments</button>
                    </Link>
                </div>
            </div>
            {
                loading ? <Loader /> :
                    <div className="w-3/5">
                        <OutlineTable tableData={tableData} />
                    </div>
            }
        </section>
    )
}
