'use client'

// hooks
import useBackgroundImage from "@/hooks/useBackgroundImage";

// images
const images = [
    "/assets/hero-background.jpg",
    "/assets/hero2.jpg",
    "/assets/hero3.jpg"
]

export default function CarouselSection() {

    const backgroundImage = useBackgroundImage(images, 3000)

    return (
        <section
            className='flex-center text-white min-h-[60vh] md:m-h-[80vh] nav:min-h-screen bg-cover animate-fadein'
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%), url('${backgroundImage}')`
            }}
        >
            <div className="gap-4 flex-start mb-24 flex-col">
                <h1 className="header-text md:w-4/5">Unleash Your Competitive Spirit in the Ultimate Esports Arena</h1>
                <p className="body-text md:w-3/5 ">Enter the world of esports, where skill and strategy collide in epic tournaments. Join a vibrant community, showcase your gaming prowess, and chase victory on a global stage. Elevate your gaming journey and forge unbreakable alliances. Your journey to esports glory starts now.</p>
            </div>
        </section>
    )
}
