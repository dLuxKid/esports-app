'use client'



export default function withoutAuth(Component: React.ComponentType) {
    const Auth = (props: any) {

        return <Component {...props} />
    }

    return Auth


}
