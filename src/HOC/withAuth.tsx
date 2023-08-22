'use client'

// next imports
import { useRouter } from "next/navigation"
// react imports
import { useEffect } from 'react'
// context data
import { useAuthContext } from "@/contexts/useAuthContext"
// components
import PageLoader from "@/components/PageLoader/PageLoader"


function withAuth(Component: React.ComponentType) {

    const props = Component.defaultProps
    const otherProps = Component.propTypes

    const Auth = () => {
        // get user from store
        const { user, authIsReady } = useAuthContext()

        if (!user && authIsReady) {
            // If user is not logged in, return login component
            return <Redirect url="/login" />;
        }

        return <Component {...props} {...otherProps} />

    }

    return Auth
}

export const Redirect = ({ url }: { url: string }) => {
    const router = useRouter();

    useEffect(() => {
        router.push(url);
    }, [router, url]);
    return <PageLoader />;
};

export default withAuth