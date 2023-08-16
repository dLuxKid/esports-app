'use client'

// next imports
import Image from "next/image";
// images
import img from '@/assets/codm6.jpg';
// components
import RegisterTeam from "@/components/Form/RegisterTeam";
import Loader from "@/components/Loader/Loader";
// hooks
import useAccountCheck from "@/hooks/useAccountCheck";

function Register() {
    const { loading } = useAccountCheck('owner', 'Use an owner account to register team')

    if (loading) {
        return (
            <div className="flex-center w-full h-screen">
                <Loader />
            </div>
        )
    }

    return (
        <section className='relative bg-pry-grey flex-center min-h-[90vh]'>
            <div className='flex-between gap-[2.5%]'>
                <RegisterTeam />
                <div className='w-1/4 hidden md:block'>
                    <Image src={img} alt='codm player' className='object-fill object-center bg-clip-content h-screen' />
                </div>
            </div>
        </section>
    )
}


export default Register