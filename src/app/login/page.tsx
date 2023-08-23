'use client'

// next import
import Image from 'next/image'
// images
import img from '@/assets/codm2.jpg'
import codmbg from '@/assets/codmbg.jpg'
// components
import LoginForm from '@/components/Form/LoginForm'
// HOC
import withoutAuth from "@/HOC/withoutAuth";

function Login() {
    return (
        <section className='relative flex-center min-h-[90vh]'>
            <div className='absolute top-0 left-0 right-0 bottom-0 -z-10'>
                <Image src={codmbg} alt='bg' className='h-full w-full object-fill object-center opacity-80' />
            </div>
            <div className='flex-between w-full gap-[2.5%]'>
                <LoginForm />
                <div className='w-1/4 hidden nav:block'>
                    <Image src={img} alt='codm player' className='w-full min-h-[60vh]  object-fill object-center bg-clip-content' />
                </div>
            </div>
        </section>
    )
}

export default withoutAuth(Login)