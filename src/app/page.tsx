"use client"
import useBackgroundImage from "@/hooks/useBackgroundImage";
import styles from "@/styles/homepage.module.css";
const images = [
  "/assets/hero-background.jpg", "/assets/hero2.jpg",
  "/assets/hero3.jpg"
]

export default function Home() {
  const backgroundImage = useBackgroundImage(images, 3000)

  return (
    <main className="max-w-screen min-h-screen">
      <div className="flex h-[65vh]">
        <div
          className={`flex flex-col text-white p-20 space-y-32 justify-center w-3/5 bg-zinc-700 bg-cover ${styles.herobanner}`}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%), url('${backgroundImage}')`
          }}
        >
          <div className="space-y-1 flex flex-col">
            <p className="font-extralight">09/08</p>
            <h1 className="text-8xl font-bold w-4/5">CODM Tournament #1</h1>
            <button type="button" className="btn white-btn w-1/10 p-4">
              Register
            </button>
          </div>
          <ol className={`${styles.list} flex space-x-14`}>
            <li className={`${styles.listitem} flex`}>
              <span>
                <div className="font-bold">Tournament #1</div>
                Here is a brief description...
              </span>
            </li>
            <li className={`${styles.listitem} flex opacity-25`}>
              <span>
                <div className="font-bold">Tournament #1</div>
                Here is a brief description...
              </span>
            </li>
            <li className={`${styles.listitem} flex`}>
              <span>
                <div className="font-bold">Tournament #1</div>
                Here is a brief description...
              </span>
            </li>
          </ol>
        </div>
        <div className={`w-2/5 bg-zinc-300 ${styles.banner} bg-contain`}></div>
      </div>
    </main>
  );
}
