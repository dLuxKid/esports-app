'use client'
// next imports
import Link from "next/link"
// icons
import { Icon } from '@iconify/react';
// react imports
import { useState } from "react";

export default function LoginForm() {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    return (
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
                <label className="w-full h-[2.8125rem] relative">
                    <input
                        required
                        type="text"
                        title="email"
                        name="email"
                        placeholder="e-mail"
                    // value={state.name}
                    // onChange={handleChange}
                    />
                </label>
                <label className='relative w-full h-[2.8125rem]'>
                    <input
                        required
                        type={passwordVisible ? 'text' : "password"}
                        title="password"
                        name="password"
                        placeholder="password"
                    // value={state.name}
                    // onChange={handleChange}
                    />
                    <span className="top-5 right-4 absolute cursor-pointer" onClick={() => setPasswordVisible(prev => !prev)}><Icon icon={!passwordVisible ? 'ph:eye-closed-thin' : "ph:eye-thin"} width={24} height={24} color="#d4d4d4" /></span>
                </label>
                <div className='flex justify-start items-center mt-6'>
                    <button type='submit' className="cta-btn btn">Log in</button>
                    <span className='ml-8 tiny-text text-[#d4d4d4] cursor-pointer'>Forget Password?</span>
                </div>
            </form>
        </div>
    )
}
