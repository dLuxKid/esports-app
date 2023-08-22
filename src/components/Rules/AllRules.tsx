'use client'

// react imports
import { useState } from 'react'
// data
import { generalRules, brRules } from "@/data/esportRules";


export default function AllRules() {

    const [rules, setRules] = useState<Array<{ category: string; rules: string[] }>>(generalRules)

    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const setShowRules = (i: number) => {
        if (activeIndex === i) {
            setActiveIndex(null)
            return
        }
        setActiveIndex(i)
    }


    return (
        <div className='bg-pry-grey p-[5%]'>
            <div className='flex-center flex-col md:flex-row gap-4 md:gap-6 mb-8'>
                <p className={`title-text text-pure-black cursor-pointer pb-1 md:pb-2 ${rules === generalRules && 'border-pry-black border-b-2'}`} onClick={() => setRules(generalRules)}>GENERAL RULESET</p>
                <p className={`title-text text-pure-black cursor-pointer pb-1 md:pb-2 ${rules === brRules && 'border-pry-black border-b-2'}`} onClick={() => setRules(brRules)}>BR RULESET</p>
            </div>

            <div className="flex-center flex-col gap-6">
                {rules.map((item, i) => (
                    <div className="flex flex-col gap-2 w-full" key={i}>
                        <div className="flex-between p-4 w-full bg-pry-white rounded-sm shadow-sm">
                            <h1 className="body-text uppercase text-pry-black">{item.category}</h1>
                            <span className={`body-text text-black cursor-pointer duration-300 transition-all ${activeIndex === i && 'rotate-180'}`} onClick={() => setShowRules(i)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                                    <path
                                        fill="none"
                                        stroke="#000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="4"
                                        d="M36 18L24 30L12 18"
                                    />
                                </svg>
                            </span>
                        </div>
                        {activeIndex === i &&
                            <ul className="flex-start flex-col gap-2 py-2 px-4 bg-pry-white rounded-sm shadow-sm animate-fadeinSlow">
                                {item.rules.map((rules, i) => (
                                    <li className="tiny-text text-black" key={i}>{rules}</li>
                                ))}
                            </ul>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
