// next import
import Image from 'next/image'
// images
import img from '@/assets/codm2.jpg'
import codmbg from '@/assets/codmbg.jpg'
// components
import LoginForm from '@/components/Form/LoginForm'

export default function Login() {
    return (
        <section className='relative flex-center'>
            <div className='absolute top-0 left-0 right-0 bottom-0 -z-10'>
                <Image src={codmbg} alt='bg' className='h-full w-full object-fill object-center opacity-80' />
            </div>
            <div className='flex-between'>
                <LoginForm />
                <div className='w-1/4 hidden md:block h-auto'>
                    <Image src={img} alt='codm player' className='w-full h-full object-fill object-center bg-clip-content' />
                </div>
            </div>
        </section>
    )
}
