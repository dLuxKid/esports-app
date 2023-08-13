import Link from "next/link";
// components
import OutlineTable from "../TournamentTable/OutlineTable";

export default function Tournament() {
    return (
        <section className="flex-between">
            <div className="flex-start flex-col gap-6 w-1/3 overflow-ellipsis">
                <h1 className="header-text text-pure-black">Available tourneys</h1>
                <div>
                    <Link href={'/tournaments'}>
                        <button type="button" className="btn black-btn">All tournaments</button>
                    </Link>
                </div>
            </div>
            {/* table */}
            <div className="w-3/5">
                <OutlineTable />
            </div>
        </section>
    )
}
