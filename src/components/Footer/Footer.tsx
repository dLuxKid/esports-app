import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo-transparent-svg.svg'


export default function Footer() {
    return (
        <footer className='w-full'>
            <div className='bg-pry-white px-[10%] py-[5%] flex-wrap flex justify-between items-start gap-8 flex-col md:flex-row'>
                <div className='flex-start flex-col gap-4 w-full md:max-w-xs'>
                    <Image src={logo} alt='app logo' width={96} height={72} />
                    <p className='tiny-text text-black leading-7'>
                        Power up your esports journey with our cutting-edge app. Sign up now to compete, connect, and conquer in thrilling tournaments. Unleash your gaming prowess and win exciting prizes, all in one place.
                    </p>
                </div>
                <div className='flex-start flex-col gap-2 md:gap-4'>
                    <p className='tiny-text uppercase text-[#ACACAC] leading-5'>MENU</p>
                    <ul className='flex-start gap-4 flex-col'>
                        <li className="text-[1.125rem] leading-[1.25rem] cursor-pointer font-semibold text-black">tournaments</li>
                        <li className="text-[1.125rem] leading-[1.25rem] cursor-pointer font-semibold text-black">set of rules</li>
                        <li className="text-[1.125rem] leading-[1.25rem] cursor-pointer font-semibold text-black">partner</li>
                        <li className="text-[1.125rem] leading-[1.25rem] cursor-pointer font-semibold text-black">teams</li>
                        <li className="text-[1.125rem] leading-[1.25rem] cursor-pointer font-semibold text-black">your teams</li>
                    </ul>
                </div>
                <div className='flex-start flex-col gap-2 md:gap-4'>
                    <p className='tiny-text uppercase text-[#ACACAC] leading-5'>SOCIAL MEDIA</p>
                    <ul className='flex-start gap-4 flex-col'>
                        <li className="text-[1.125rem] leading-[1.25rem] cursor-pointer font-semibold text-black">Twitter</li>
                        <li className="text-[1.125rem] leading-[1.25rem] cursor-pointer font-semibold text-black">Github</li>
                        <li className="text-[1.125rem] leading-[1.25rem] cursor-pointer font-semibold text-black">LinkedIn</li>
                        <li className="text-[1.125rem] leading-[1.25rem] cursor-pointer font-semibold text-black">Discord</li>
                    </ul>
                </div>
                <div className='flex-start flex-col gap-2 md:gap-4'>
                    <p className='tiny-text uppercase text-[#ACACAC] leading-5'>CONTACT</p>
                    <ul className='flex-start gap-4 flex-col'>
                        <li className="flex-start flex-col gap-0">
                            <p className='body-text text-black'>Do you have a general question?</p>
                            <a title='discord server' href='' rel='noopenner' target='_blank' className='text-pry-green font-semibold leading-[22px] cursor-pointer hover:underline'>Discord Server</a>
                        </li>
                        <li className="flex-start flex-col gap-0">
                            <p className='body-text text-black'>Do you have a business request?</p>
                            <a title='discord server' href='' rel='noopenner' target='_blank' className='text-pry-green font-semibold leading-[22px] cursor-pointer hover:underline'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-pry-black px-[5%] py-4 flex-between flex-wrap gap-4'>
                <p className='body-text text-white'>KID E-sports</p>
                <p className='tiny-text text-white'>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
        </footer>
    )
}
