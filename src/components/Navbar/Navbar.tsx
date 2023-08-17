
// next imports
import Image from "next/image";
import Link from "next/link";
// image
import logo from '@/assets/logo-transparent-svg.svg';
// components
import NavAuth from "./NavAuth";


export default function Navbar() {
    return (
        <header className="bg-pry-black px-[5%] py-4">
            <div className="flex-between">
                <div className="flex-center w-auto h-auto">
                    <Image src={logo} alt="app logo" height={48} width={72} />
                </div>
                {/* DESKTOP NAV */}
                <nav className="flex-center">
                    <ul className="flex-between gap-6 text-pry-white">
                        <li className="nav-text"><Link href={'/tournaments'}>tournaments</Link></li>
                        <li className="nav-text"><Link href={'/rules'}>rules</Link></li>
                        <li className="nav-text"><Link href={'/partners'}>partners</Link></li>
                        <li className="nav-text"><Link href={'/my-team'}>my team</Link></li>
                    </ul>
                </nav>
                <NavAuth />
            </div>
        </header>
    )
}
