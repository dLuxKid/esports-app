'use client'

// next imports
import Image from "next/image";
import Link from "next/link";
// image
import logo from '@/assets/logo-transparent-svg.svg'
// auth context
import { useAuthContext } from "@/contexts/useAuthContext";
// components
import Avatar from "../Avatar/Avatar";


export default function Navbar() {

    const { user } = useAuthContext()

    return (
        <header className="bg-pry-black px-[5%] py-4">
            <div className="flex-between">
                <div className="flex-center w-auto h-auto">
                    <Image src={logo} alt="app logo" height={48} width={72} />
                </div>
                {/* DESKTOP NAV */}
                <nav className="flex-center">
                    <ul className="flex-between space-x-4 text-pry-white">
                        <li className="nav-text"><Link href={''}>tournament</Link></li>
                        <li className="nav-text"><Link href={''}>rules</Link></li>
                        <li className="nav-text"><Link href={''}>partner</Link></li>
                        <li className="nav-text"><Link href={''}>teams</Link></li>
                        <li className="nav-text"><Link href={''}>my teams</Link></li>
                    </ul>
                </nav>
                {user?.uid ?
                    <Avatar url={user.photoURL} name={user.displayName} /> :
                    <div className="flex-center gap-4">
                        <Link href={'/login'}>
                            <button type='button' className="btn white-outline">
                                Login
                            </button>
                        </Link>
                        <Link href={'/signup'}>
                            <button type='button' className="btn white-btn">
                                Register
                            </button>
                        </Link>
                    </div>
                }
            </div>
        </header>
    )
}
