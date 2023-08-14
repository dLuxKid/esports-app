'use client'

// hooks
import useBackgroundImage from "@/hooks/useBackgroundImage";
// styles
import styles from "@/styles/carousel.module.css";


// images
const images = [
    "/assets/hero-background.jpg", "/assets/hero2.jpg",
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
                <div className="space-y-1 flex flex-col">
                    <p className="font-extralight">09/08</p>
                    <h1 className="banner-text w-4/5">CODM Tournament #1</h1>
                    <div>
                        <button type="button" className="btn white-btn p-4">
                            Register
                        </button>
                    </div>
                </div>
                <ol className={`${styles.list} flex space-x-14`}>
                    <li className={`${styles.listitem} flex`}>
                        <span>
                            <div className="text-[0.9375rem] font-semibold">Tournament #1</div>
                            <p className="text-[0.9375rem] font-normal">Here is a brief description...</p>
                        </span>
                    </li>
                    <li className={`${styles.listitem} flex opacity-25`}>
                        <span>
                            <div className="text-[0.9375rem] font-semibold">Tournament #1</div>
                            <p className="text-[0.9375rem] font-normal">Here is a brief description...</p>
                        </span>
                    </li>
                    <li className={`${styles.listitem} flex`}>
                        <span>
                            <div className="text-[0.9375rem] font-semibold">Tournament #1</div>
                            <p className="text-[0.9375rem] font-normal">Here is a brief description...</p>
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}
