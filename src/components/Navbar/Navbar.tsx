'use client'

// next imports
import Image from "next/image";
import Link from "next/link";
// react
import { useState } from "react";
// image
import logo from '@/assets/logo-transparent-svg.svg';
// components
import NavAuth from "./NavAuth";


export default function Navbar() {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    const toggleMenu = () => setShowMenu(prev => !prev)

    return (
        <header className="bg-pry-black px-[5%] py-4 relative">
            <div className="flex-between">
                <div className="flex-center w-auto h-auto">
                    <Link href={'/'}>
                        <Image src={logo} alt="app logo" height={48} width={72} />
                    </Link>
                </div>
                {/* DESKTOP NAV */}
                <div className="hidden nav:block">
                    <nav className="flex-center">
                        <ul className="flex-between gap-6 text-pry-white">
                            <li className="nav-text"><Link href={'/tournaments'}>tournaments</Link></li>
                            <li className="nav-text"><Link href={'/rules'}>rules</Link></li>
                            <li className="nav-text"><Link href={'/partners'}>partners</Link></li>
                            <li className="nav-text"><Link href={'/my-team'}>my team</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="hidden nav:block">
                    <NavAuth />
                </div>

                {/* Mobile Nav */}
                <div className="block nav:hidden cursor-pointer" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <g id="feBar0" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1"><g id="feBar1" fill="white"><path id="feBar2" d="M3 16h18v2H3v-2Zm0-5h18v2H3v-2Zm0-5h18v2H3V6Z" /></g></g>
                    </svg>
                </div>

                {
                    showMenu &&
                    <div className="flex nav:hidden absolute top-16 right-0 sm:right-[5%] flex-col gap-6 p-12 bg-black w-full max-w-md z-50">
                        <nav className="flex-center rounded rounded-r-none w-full" onClick={toggleMenu}>
                            <ul className="flex-between flex-col gap-6 text-pry-white w-full">
                                <li className="nav-text w-full flex-center"><Link href={'/tournaments'}>tournaments</Link></li>
                                <li className="nav-text w-full flex-center"><Link href={'/rules'}>rules</Link></li>
                                <li className="nav-text w-full flex-center"><Link href={'/partners'}>partners</Link></li>
                                <li className="nav-text w-full flex-center"><Link href={'/my-team'}>my team</Link></li>
                            </ul>
                        </nav>
                        <div className="flex-center">
                            <NavAuth toggleMenu={toggleMenu} />
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}
