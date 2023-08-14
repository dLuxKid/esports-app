'use client'

// next imports
import Link from "next/link";
// auth context
import { useAuthContext } from "@/contexts/useAuthContext";
// components
import Avatar from "../Avatar/Avatar";


export default function NavAuth() {
    const { user, authIsReady } = useAuthContext()

    if (!authIsReady) {
        return (
            <div className="flex-end gap-2 relative opacity-80">
                <div className="h-10 w-10 bg-pry-grey rounded-full animate-pulse"></div>
                <div className="h-6 w-32 bg-pry-grey rounded animate-pulse"></div>
            </div>
        )
    }

    return (
        <>
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
        </>
    )
}
