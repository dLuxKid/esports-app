import { collectionTeamType } from "@/types/collectionTypes";

interface Props {
    teamData: collectionTeamType[]
    showTeam: (item: collectionTeamType) => void
}

export default function TeamCard({ teamData, showTeam }: Props) {

    if (!teamData?.length) return <p className="body-text">No teams registered in tournament</p>

    return (
        <div>
            {teamData?.map((item, i) => (
                <div className="flex items-center gap-6 p-4 border-b border-b-pry-grey" key={i}>
                    <span className="h-11 w-11 rounded-sm">
                        <img src={item.photoUrl} alt="team logo" className="w-full h-full" />
                    </span>
                    <p className="body-text cursor-pointer" onClick={() => showTeam(item)}>{item.teamName}</p>
                </div>
            ))}
        </div>
    )
}
