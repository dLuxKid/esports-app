'use client'



export default function withAuth(Component: React.ComponentType) {
    const Auth = (props: any) {

        return <Component {...props} />
    }

    return Auth


}
