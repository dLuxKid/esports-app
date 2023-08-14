// next imports
import Link from 'next/link'
// components
import Banner from "@/components/HeadBanner/Banner";
import OutlineTable from "@/components/TournamentTable/OutlineTable";

export default function page() {
    return (
        <>
            <Banner text="All tournaments" />
            <section className="flex-between">
                <div className="w-3/5">
                    <OutlineTable />
                </div>
                <div className="w-full max-w-md bg-pry-green text-pry-white p-12">
                    <div className="flex-start flex-col gap-8">
                        <div>
                            <p className="text-2xl">Being Esports D/A/CH PUBG Summer Championship</p>
                        </div>
                        <div className="flex-start w-full gap-4 border-b-pry-white border-b">
                            <p className="font-bold text-[0.9375rem] uppercase">DUO</p>
                            <p className="font-bold text-[0.9375rem] uppercase">16.05.2020</p>
                            <p className="font-bold text-[0.9375rem] uppercase">1.30pm</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-[1.125rem] leading-7">MAP</p>
                            <p className="body-text">Alcatraz</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='mt-10 flex-between'>
                        <p>
                            <Link href={'/rules'} className='font-bold text-[0.9375rem]'>The rules</Link>
                        </p>
                        <button type='button' className="btn white-btn">Check in</button>
                    </div>
                </div>
            </section>
        </>
    )
}
