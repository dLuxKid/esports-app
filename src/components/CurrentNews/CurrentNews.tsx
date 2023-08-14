
export default function CurrentNews() {
    return (
        <section className="flex-between bg-pry-black">
            <div className="flex-start flex-col gap-6 w-2/5">
                <h1 className="header-text text-pry-white">Current News</h1>
                <p className="body-text text-pry-white">Explore the dynamic universe of Call of Duty: Mobile (CODM) on our blog! From action-packed multiplayer clashes to intense battle royale encounters, our posts delve into the heart of mobile gaming excitement. Uncover tips, updates, and strategies to enhance your CODM experience. Join us as we navigate this thrilling virtual battlefield together!</p>
                <div>
                    <a href="https://www.callofduty.com/blog" target="_blank" rel="noopener">
                        <button type="button" className="btn white-btn">All news</button>
                    </a>
                </div>
            </div>
            <div className="w-1/2 flex flex-wrap gap-4">
                <div className="w-[48%] cursor-pointer">
                    <a href="https://www.callofduty.com/blog/2023/07/call-of-duty-mobile-season-7-2023-heat-wave-maps-modes-themed-event" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-7-HEAT-WAVE-TOUT.jpg" alt="blog image" />
                    </a>
                    <p className="body-text text-pry-white">It’s a Scorching Summer in Call of Duty: Mobile Season 7 — Heat Wave</p>
                </div>


                <div className="w-[48%] cursor-pointer">
                    <a href="https://www.callofduty.com/blog/2023/06/call-of-duty-mobile-season-6-2023-templars-oath-maps-modes-themed-event" target="_blank" rel="noopener noreferrer">
                        <img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/codm/CODM-S6-TOUT.jpg" alt="blog image" />
                    </a>
                    <p className="body-text text-pry-white">The King Returns in Call of Duty: Mobile Season 6 — Templar’s Oath</p>
                </div>

                <div className="cursor-pointer">
                    <a href="https://www.callofduty.com/blog/2023/08/call-of-duty-modern-warfare-II-to-modern-warfare-III-carry-forward" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWIII-REVEAL-CARRYFORWARD-TOUT-TXT.jpg" alt="blog image" />
                    </a>
                    <p className="body-text text-pry-white">Call of Duty: Modern Warfare II and Call of Duty: Modern Warfare III. Carry Forward Content: Your Questions Answered</p>
                </div>
            </div>
        </section>
    )
}
