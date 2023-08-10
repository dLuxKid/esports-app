'use client'

// react import
import { useState } from "react"
// hook
import useAuthentication from "@/hooks/useAuthentication"
// icons
import { Icon } from '@iconify/react';


export default function Avatar({ url, name }: { url: string, name: string }) {

    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    return (
        <div className="flex-end gap-2 relative">
            <div className="h-10 w-10">
                <img src={url} alt="display photo" className="h-full w-full rounded-full object-fill object-left" />
            </div>
            <p className="body-text text-pry-white">{name}</p>
            <span onClick={() => setShowDropdown(prev => !prev)} className="cursor-pointer">
                <Icon icon="gridicons:dropdown" color="white" height={24} width={24} />
            </span>
            {showDropdown && <Dropdown />}
        </div>
    )
}

function Dropdown() {

    const { logout } = useAuthentication()

    return (
        <div className="flex-center bg-pry-white text-pry-black absolute cursor-pointer top-8 -right-2 mx-auto" >
            <span className="px-4 py-2 tiny-text" onClick={logout}>Log out</span>
        </div>
    )
}