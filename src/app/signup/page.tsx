'use client'

// next imports
import Image from "next/image";
// images
import img from '@/assets/codm3.jpg'
// components
import SignupForm from "@/components/Form/SignupForm";
// HOC
import withoutAuth from "@/HOC/withoutAuth";

function Signup() {
    return (
        <section className='relative bg-pry-white flex-center min-h-[60vh] nav:min-h-[90vh]'>
            <div className='flex-between w-full gap-[2.5%]'>
                <SignupForm />
                <div className='w-1/4 h-full hidden nav:block'>
                    <Image src={img} alt='codm player' className='h-screen min-h-[60vh] object-fill object-center bg-clip-content' />
                </div>
            </div>
        </section>
    )
}


export default withoutAuth(Signup)