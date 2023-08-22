// components
import Banner from "@/components/HeadBanner/Banner";
import AllRules from "@/components/Rules/AllRules";


export default function Rules() {
    return (
        <>
            <Banner text='set of rules' />
            <section className="flex flex-col gap-6 nav:gap-12">
                <div className='flex-center flex-col gap-6'>
                    <h1 className='header-text leading-5 text-black'>The set of rules</h1>
                    <p className="body-text text-black">These rules provide a comprehensive framework to ensure the smooth operation of Call of Duty Mobile esports competitions. It's important to adapt and customize these guidelines to fit the specific needs and nature of your esports tournaments while maintaining the principles of fair play, competitive spirit, and player engagement.</p>
                </div>
                <AllRules />
            </section>
        </>
    )
}
