import styles from "@/styles/homepage.module.css";

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen">
      <div className="flex h-[60vh]">
        <div
          className={`flex flex-col text-white p-20 space-y-12 justify-center w-3/5 bg-zinc-700 ${styles.herobanner}`}
        >
          <div>
            <p>09/08</p>
            <h1 className="text-8xl font-bold w-4/5">CODM Tournament</h1>
            <button type="button" className="btn white-btn w-1/10 p-4">
              Register
            </button>
          </div>
          <ol className={`${styles.list} flex space-x-28`}>
            <li className={`${styles.listitem} flex`}>
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
            <li className={`${styles.listitem} flex`}>
              <span>
                <div className="font-bold">Tournament #1</div>
                Here is a brief description...
              </span>
            </li>
          </ol>
        </div>
        <div className="w-2/5 bg-zinc-300">Hello</div>
      </div>
    </main>
  );
}
