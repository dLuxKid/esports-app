// next
import Link from "next/link";
// types
import { collectionTournamentType, } from "@/types/collectionTypes";


export default function AboutTournament({ selectedTourney }: { selectedTourney: collectionTournamentType }) {
    return (
        <div className="w-full max-w-md bg-pry-green text-pry-white p-8 md:p-12 order-1 nav:order-2">
            <div className="flex-start flex-col gap-8">
                <div>
                    <p className="text-2xl">{selectedTourney.tournamentName}</p>
                </div>
                <div className="flex-start w-full gap-4 border-b-pry-white border-b">
                    <p className="font-bold text-[0.9375rem] uppercase">{selectedTourney.mode}</p>
                    <p className="font-bold text-[0.9375rem] uppercase">{selectedTourney.date}</p>
                    <p className="font-bold text-[0.9375rem] uppercase">{selectedTourney.time}</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-[1.125rem] leading-7">MAP</p>
                    <p className="body-text">Alcatraz</p>
                </div>
                <div>
                </div>
            </div>
            <div className='mt-10 flex-between flex-col gap-4 md:flex-row'>
                <p>
                    <Link href={'/rules'} className='font-bold text-[0.9375rem]'>Read the rules <span className="ml-2">&rarr;</span></Link>
                </p>
                <Link href={`tournaments/${selectedTourney.id}`}>
                    <button type='button' className="btn white-btn h-11">Check in</button>
                </Link>
            </div>
        </div>
    )
}
