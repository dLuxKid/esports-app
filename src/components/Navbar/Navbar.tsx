import Image from "next/image";
// image
import logo from '@/assets/logo-transparent-svg.svg'
import Link from "next/link";


export default function Navbar() {
    return (
        <header className="bg-pry-black px-[5%] py-4">
            <div className="flex-between">
                <div className="flex-center">
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
            </div>
        </header>
    )
}
