'use client'

// next imports
import { useRouter } from "next/navigation"
// react imports
import { useEffect } from 'react'
// store data
import { useAuthStore } from "@/store"


export default function withoutAuth(Component: React.ComponentType) {
    const props = Component.defaultProps
    const otherProps = Component.propTypes

    return () => {
        // get user from store
        const user = useAuthStore(state => state.user)

        if (user?.uid) {
            // If user is not logged in, return login component
            return <Redirect url="/" />;
        }
        return <Component {...props} {...otherProps} />
    }
}

export const Redirect = ({ url }: { url: string }) => {
    const router = useRouter();

    useEffect(() => {
        router.push(url);
    }, [router, url]);
    return <></>;
};
