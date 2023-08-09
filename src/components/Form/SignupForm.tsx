'use client'

// icons
import { Icon } from '@iconify/react';
// react imports
import { useState } from "react";

export default function SignupForm() {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    return (
        <div className='w-full md:w-3/4 flex-start flex-col gap-8 p-[5%] bg-pry-grey rounded-lg'>
            <div className="flex-start">
                <h1 className="title-text">Register</h1>
            </div>
            <form className='w-full max-w-xl flex items-stretch justify-center gap-4 md:gap-6 flex-col'>
                <label className="w-full h-[2.8125rem] relative">
                    <input
                        required
                        type="text"
                        title="username"
                        name="username"
                        placeholder="username"
                    // value={state.name}
                    // onChange={handleChange}
                    />
                </label>
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
                        placeholder="Enter your password"
                    // value={state.name}
                    // onChange={handleChange}
                    />
                    <span className="top-5 right-4 absolute cursor-pointer" onClick={() => setPasswordVisible(prev => !prev)}><Icon icon={!passwordVisible ? 'ph:eye-closed-thin' : "ph:eye-thin"} width={24} height={24} color="#d4d4d4" /></span>
                </label>
                <label className="w-full h-72 relative flex-start flex-col gap-2 mt-4">
                    <span className='body-text'>Profile picture</span>
                    <label className='w-full border border-[#d4d4d4] flex-center h-full'>
                        <button type='button' className='btn black-btn'>Upload image</button>
                        <input
                            required
                            type="file"
                            title="file"
                            name="thumbnail"
                            placeholder="profile picture"
                            // value={state.name}
                            // onChange={handleChange}
                            className='hidden'
                        />
                    </label>
                </label>
                <div className='flex-end mt-6'>
                    <button type='submit' className="cta-btn btn">Register</button>
                </div>
            </form>
        </div>
    )
}
