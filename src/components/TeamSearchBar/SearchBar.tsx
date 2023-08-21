import { Dispatch, SetStateAction } from "react"

interface Props {
    searchField: string
    setSearchField: Dispatch<SetStateAction<string>>
}

export default function SearchBar({ setSearchField, searchField }: Props) {
    return (
        <label className="w-full">
            <input
                title="search"
                type="search"
                name="search"
                placeholder="Enter team name"
                className="bg-pry-grey outline-none border-0 rounded w-full p-4"
                value={searchField}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchField(e.target.value)}
            />
        </label>
    )
}
