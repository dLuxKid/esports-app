
// next imports
import Image from 'next/image'
// images
import logo from '@/assets/codmLogo.png'

export default function Banner({ text }: { text: string }) {
    return (
        <section className="bg-slate-700 flex-between h-[25rem]">
            <div className=" w-3/5">
                <h1 className="banner-text text-pry-white">{text}</h1>
            </div>
            <div className="w-1/5 h-min">
                <Image src={logo} alt="codm logo" />
            </div>
        </section>
    )
}
