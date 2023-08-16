'use client'

// types
import { tournamentType } from "@/types/collectionTypes";
import { Dispatch, SetStateAction } from "react";

interface Props {
    tableData: tournamentType[]
    loadMore?: () => void
    setSelectedTourney?: Dispatch<SetStateAction<tournamentType | null>>
    selectedTourney?: tournamentType
    hasMore?: boolean
}

export default function OutlineTable({ hasMore, tableData, loadMore, setSelectedTourney, selectedTourney }: Props) {

    const tableRowStyles = 'py-2 pr-2 text-left text-[#ACACAC] uppercase tracking-[1px] tiny-text w-1/5'
    const tableDataStyles = 'py-1 pr-2 body-text w-1/5'



    const showTourneyInfo = (item: tournamentType) => {
        if (!setSelectedTourney) return

        if (selectedTourney) {
            setSelectedTourney(null)
        } else {
            setSelectedTourney(item)
        }
    }

    return (
        <>
            {tableData.length ?
                <div className="flex-start flex-col gap-6">
                    <div className="flex-between w-full max-w-sm">
                        <div className="flex flex-col gap-2">
                            <h1 className="title-text text-pry-green">Active</h1>
                            <span className="h-[2px] w-5/6 bg-pry-green"></span>
                        </div>
                        <div className="flex">
                            <h1 className="title-text text-pry-grey">Expired</h1>
                        </div>
                    </div>
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
                                        <td onClick={() => showTourneyInfo(item)} className={`${tableDataStyles} pl-4 cursor-pointer`}>{item.tournamentName}</td>
                                        <td className={tableDataStyles}>{item.mode}</td>
                                        <td className={tableDataStyles}>{item.time}</td>
                                        <td className={tableDataStyles}>{item.date}</td>
                                        <td className="py-2">
                                            <button type="button" className="text-center font-semibold py-2 px-9 transition-all duration-300 hover:opacity-90 cta-btn h-12">Check in</button>
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
        </>
    )
}
