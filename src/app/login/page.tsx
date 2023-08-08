// next import
import Image from 'next/image'
import Link from 'next/link'
// react import
// images
import img from '@/assets/codm2.jpg'
import codmbg from '@/assets/codmbg.jpg'

export default function Login() {
    return (
        <section className='relative flex-center'>
            <div className='absolute top-0 left-0 right-0 bottom-0 -z-10'>
                <Image src={codmbg} alt='bg' className='h-full w-full object-fill object-center opacity-80' />
            </div>
            <div className='flex-between'>
                <div className='w-full md:w-2/3 flex-between p-[5%] bg-pry-white rounded-lg'>
                    <div className='w-full md:w-40 flex-start flex-col gap-12'>
                        <h1 className='title-text text-black'>Welcome back!</h1>
                        <p className='tiny-text text-black text-start'>
                            No account yet? <br /> <span className='text-pry-green cursor-pointer -mt-1'>
                                <Link href={'/signup'}>
                                    create one
                                </Link>
                            </span>
                        </p>
                    </div>
                    <form className='w-full md:w-3/5 flex items-stretch justify-center gap-4 md:gap-6 flex-col'>
                        <label>
                            <input
                                required
                                type="text"
                                title="email"
                                name="email"
                                placeholder="Enter your password"
                            // value={state.name}
                            // onChange={handleChange}
                            />
                        </label>
                        <label>
                            <input
                                required
                                type="password"
                                title="password"
                                name="password"
                                placeholder="Enter your password"
                            // value={state.name}
                            // onChange={handleChange}
                            />
                        </label>
                        <div className='flex justify-start items-center'>
                            <button type='submit' className="cta-btn btn">Register</button>
                            <span className='ml-8 tiny-text text-[#d4d4d4] cursor-pointer'>Forget Password?</span>
                        </div>
                    </form>
                </div>
                <div className='w-1/4 hidden md:block h-auto'>
                    <Image src={img} alt='codm player' className='w-full h-full object-fill object-center bg-clip-content' />
                </div>
            </div>
        </section>
    )
}
