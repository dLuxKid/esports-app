import { collectionTeamType } from "@/types/collectionTypes";


export default function ViewTeam({ selectedTeam }: { selectedTeam: collectionTeamType }) {
    return (
        <div className="w-full lg:w-1/5 max-w-2xl bg-pry-green text-pry-white p-6">
            <div className="flex-start flex-col gap-4">
                <div className="flex items-center gap-4 pb-1 border-b border-b-pry-grey">
                    <span className="h-11 w-11 rounded-sm">
                        <img src={selectedTeam.photoUrl} alt="team logo" className="w-full h-full" />
                    </span>
                    <p className="body-text">{selectedTeam.teamName}</p>
                </div>
                <div className="w-full">
                    <h1 className="text-[1.125rem] leading-5 font-semibold">Members</h1>
                    <ul className="flex flex-col gap-2">
                        {
                            selectedTeam.members.map((item, i) => (
                                <li key={i} className="tiny-text">{item.ign}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
