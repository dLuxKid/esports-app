'use client'

// next imports
import Image from "next/image";
// images
import img from '@/assets/codm6.jpg';
// components
import RegisterTeam from "@/components/Form/RegisterTeam";
import PageLoader from "@/components/Loader/PageLoader";
// HOC
import withAuth from "@/HOC/withAuth";
// hook
import useAccountCheck from "@/hooks/useAccountCheck";

function Register() {
    const { loading } = useAccountCheck('owner', 'Use an owner account to create tournament')

    if (loading) return <PageLoader />

    return (
        <section className='relative bg-pry-grey flex-center min-h-[90vh]'>
            <div className='flex-between w-full gap-[2.5%]'>
                <RegisterTeam />
                <div className='w-1/4 hidden md:block'>
                    <Image src={img} alt='codm player' className='object-fill object-center bg-clip-content h-screen' />
                </div>
            </div>
        </section>
    )
}


export default withAuth(Register)