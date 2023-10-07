import logo from '@/assets/logo-transparent-png.png'
import Image from 'next/image'

export default function PageLoader() {
    return (
        <div className="h-screen w-full flex-center">
            <div className='w-full h-full max-w-xs max-h-80 animate-pulse'>
                <Image src={logo} alt="image loader" className='object-fill object-center' />
            </div>
        </div>
    )
}
