// components
import Banner from "@/components/HeadBanner/Banner";
// data
import { rules } from "@/data/esportRules";


export default function Rules() {
    return (
        <>
            <Banner text='set of rules' />
            <section className="flex flex-col gap-24">
                <div className='flex-start flex-col max-w-xl gap-6'>
                    <h1 className='header-text leading-5 text-black'>The set of rules</h1>
                    <p className="body-text text-black">These rules provide a comprehensive framework to ensure the smooth operation of Call of Duty Mobile esports competitions. It's important to adapt and customize these guidelines to fit the specific needs and nature of your esports tournaments while maintaining the principles of fair play, competitive spirit, and player engagement.</p>
                </div>
                <div className="bg-pry-grey flex-center p-[5%]">
                    hey
                </div>
            </section>
        </>
    )
}
