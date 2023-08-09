// next imports
import Image from "next/image";
// images
import img from '@/assets/codm3.jpg'
// components
import SignupForm from "@/components/Form/SignupForm";


export default function Signup() {
    return (
        <section className='relative bg-pry-white flex-center'>
            <div className='flex-between gap-[2.5%]'>
                <SignupForm />
                <div className='w-1/4 h-full hidden md:block'>
                    <Image src={img} alt='codm player' className='object-fill object-center bg-clip-content' />
                </div>
            </div>
        </section>
    )
}
