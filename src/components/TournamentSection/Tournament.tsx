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
        <section className="flex-between flex-col gap-4 md:gap-6">
            <div className="flex-center nav:flex-start flex-col gap-6 w-full">
                <h1 className="header-text text-pure-black">Upcoming Tourmanents</h1>
                <div>
                    <Link href={'/tournaments'}>
                        <button type="button" className="btn black-btn">All tournaments</button>
                    </Link>
                </div>
            </div>
            {
                loading ? <Loader /> :
                    <div className="w-full max-w-4xl overflow-scroll">
                        <OutlineTable tableData={tableData} />
                    </div>
            }
        </section>
    )
}
