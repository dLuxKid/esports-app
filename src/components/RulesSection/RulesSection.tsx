import Link from "next/link";

export default function RulesSection() {
    return (
        <section>
            <div className='flex-center max-w-2xl mx-auto flex-col gap-6'>
                <h1 className='header-text leading-5 text-black'>The set of rules</h1>
                <p className='body-text text-black'>These rules provide a comprehensive framework to ensure the smooth operation of Call of Duty Mobile esports competitions. It's important to adapt and customize these guidelines to fit the specific needs and nature of your esports tournaments while maintaining the principles of fair play, competitive spirit, and player engagement.</p>
                <div>
                    <Link href={'/rules'}>
                        <button type='button' className='btn black-btn'>All rules</button>
                    </Link>
                </div>
            </div>
            <div className='p-[5%] flex-between bg-pry-green mt-24 gap-6'>
                <h1 className='title-text text-white max-w-md'>You have a problem or a question?</h1>
                <p className='body-text text-white max-w-xs'>Hello there! Do you have any questions or are you facing any issues? Feel free to let us know, and we'll be glad to help you out.</p>
                <div>
                    <button type='button' className="btn white-btn">discord</button>
                </div>
            </div>
        </section>
    )
}
