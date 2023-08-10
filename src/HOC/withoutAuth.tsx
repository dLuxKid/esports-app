'use client'

// next imports
import { useRouter } from "next/navigation"
// react imports
import { useEffect } from 'react'
// context data
import { useAuthContext } from "@/contexts/useAuthContext"
// components
import Loader from "@/components/Loader/Loader"


export default function withoutAuth(Component: React.ComponentType) {
    const props = Component.defaultProps
    const otherProps = Component.propTypes

    return () => {
        // get user from store
        const { user } = useAuthContext()

        if (!user) {
            return <Component {...props} {...otherProps} />
        }

        return <Redirect url="/" />;
    }
}

export const Redirect = ({ url }: { url: string }) => {
    const router = useRouter();

    useEffect(() => {
        router.push(url);
    }, [router, url]);
    return <Loader />;
};
