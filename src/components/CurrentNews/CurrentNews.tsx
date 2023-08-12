
export default function CurrentNews() {
    return (
        <section className="flex-between bg-pry-black">
            <div className="flex-start flex-col gap-6 w-1/3">
                <h1 className="header-text text-pry-white">Current News</h1>
                <p className="body-text text-pry-white">Explore the dynamic universe of Call of Duty: Mobile (CODM) on our blog! From action-packed multiplayer clashes to intense battle royale encounters, our posts delve into the heart of mobile gaming excitement. Uncover tips, updates, and strategies to enhance your CODM experience. Join us as we navigate this thrilling virtual battlefield together!</p>
                <div>
                    <button type="button" className="btn white-btn">All news</button>
                </div>
            </div>
            <div className="w-3/5 grid grid-rows-2 grid-flow-col gap-4">
                <div className="row-span-1 bg-slate-600">hey</div>
                <div className="row-span-1 bg-slate-600">hey</div>
                <div className="row-span-2 bg-slate-600">hey</div>
            </div>
        </section>
    )
}
