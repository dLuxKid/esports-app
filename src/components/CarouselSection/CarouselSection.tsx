'use client'

// hooks
import useBackgroundImage from "@/hooks/useBackgroundImage";
// styles
import Link from "next/link";

// images
const images = [
    "/assets/hero-background.jpg",
    "/assets/hero2.jpg",
    "/assets/hero3.jpg"
]

export default function CarouselSection() {

    const backgroundImage = useBackgroundImage(images, 3000)

    return (
        <div className="flex">
            <div
                className='flex flex-col text-white p-20 space-y-32 justify-center bg-zinc-700 bg-cover animate-fadein'
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%), url('${backgroundImage}')`
                }}
            >
                <div className="space-y-8 flex-start flex-col">
                    <h1 className="title-text w-4/5">Unleash Your Competitive Spirit in the Ultimate Esports Arena</h1>
                    <p className="body-text w-3/5">Enter the world of esports, where skill and strategy collide in epic tournaments. Join a vibrant community, showcase your gaming prowess, and chase victory on a global stage. Elevate your gaming journey and forge unbreakable alliances. Your journey to esports glory starts now.</p>
                    <Link href={'/tournaments'}>
                        <button type="button" className="btn white-btn">
                            Register
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
