'use client'

// next
import Link from "next/link";
// react
import { Dispatch, SetStateAction } from "react";
// types
import { collectionTournamentType } from "@/types/collectionTypes";

interface Props {
    tableData: collectionTournamentType[]
    loadMore?: () => void
    setSelectedTourney?: Dispatch<SetStateAction<collectionTournamentType | null>>
    selectedTourney?: collectionTournamentType
    hasMore?: boolean
}

export default function OutlineTable({ hasMore, tableData, loadMore, setSelectedTourney, selectedTourney }: Props) {

    const tableRowStyles = 'py-2 pr-2 text-left text-[#ACACAC] uppercase tracking-[1px] tiny-text'

    const showTourneyInfo = (item: collectionTournamentType) => {
        if (!setSelectedTourney) return

        if (selectedTourney) {
            setSelectedTourney(null)
        } else {
            setSelectedTourney(item)
        }
    }

    return (
        <div className="min-w-[768px]">
            {tableData.length ?
                <div className="flex-start flex-col gap-6">
                    <div className="w-full">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b border-b-pry-grey">
                                    <th className={tableRowStyles}>Name</th>
                                    <th className={tableRowStyles}>Mode</th>
                                    <th className={tableRowStyles}>Time</th>
                                    <th className={tableRowStyles}>Date</th>
                                    <th className={tableRowStyles}>Registration</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {tableData.map((item, i) => (
                                    <tr key={i} className="border-b border-b-pry-grey hover:bg-pry-grey cursor-pointer">
                                        <td onClick={() => showTourneyInfo(item)} className={'py-1 pr-2 body-text w-2/5 pl-4 cursor-pointer overflow-x-scroll'}>{item.tournamentName}</td>
                                        <td className={'py-1 body-text w-1/10'}>{item.mode}</td>
                                        <td className={'py-1 body-text w-1/10'}>{item.time}</td>
                                        <td className={'py-1 body-text w-1/5'}>{item.date}</td>
                                        <td className="py-2">
                                            <Link href={`tournaments/${item.id}`}>
                                                <button type="button" className="font-medium py-2 px-8 transition-all duration-300 hover:opacity-90 cta-btn h-12">Check in</button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className='mt-8 block'>
                            {hasMore && (
                                <button type="button" className="btn black-btn" onClick={() => loadMore && loadMore()}>
                                    Load More
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                :
                <div className="w-full h-full flex-center">
                    <p className="title-text text-pure-black">
                        No tournaments available
                    </p>
                </div>
            }
        </div>
    )
}
