'use client'

// next imports
import { useRouter } from "next/navigation";
// react imports
import React, { useEffect, useReducer } from "react";
// hooks
import useAddToCollection from "@/hooks/useAddToCollection";
// toasts
import { showToast } from "@/functions/toast";
// components
import Loader from "../Loader/Loader";

const initialState = {
    tournamentName: "",
    code: "",
    mode: '',
    map: '',
    desc: '',
    number: '',
    discord: '',
    twitter: '',
    thumbnail: null,
    date: '',
    time: ''
};

type authState = {
    tournamentName: string;
    code: string;
    mode: string;
    map: string;
    desc: string;
    number: string;
    discord: string;
    twitter: string;
    thumbnail: File | null;
    date: string,
    time: string
};

type authActions =
    | { name: string; value: string }
    | { name: "thumbnail"; value: File | null }
    | { name: 'date'; value: Date }

const authReducer = (state: authState, action: authActions) => {
    return { ...state, [action.name]: action.value };
};

type radioType = Array<{ value: string, label: string }>


const gameOptions: radioType = [
    { value: 'duo', label: 'DUO' },
    { value: 'squad', label: 'SQUAD' },
];

const mapType: radioType = [
    { value: 'isolated', label: 'ISOLATED' },
    { value: 'alcatraz', label: 'ALCATRAZ' },
]

export default function CreateTournamentForm() {

    const { createTournament, pending, success } = useAddToCollection()

    const router = useRouter()

    const [state, dispatch] = useReducer(authReducer, initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch({ name: e.target.name, value: e.target.value })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        dispatch({ name: 'thumbnail', value: null })

        if (!e.target.files) return;

        let selectedFile = e.target.files[0];

        if (!selectedFile.type.includes("image")) {
            showToast("error", "Please select an image");
            return;
        }

        if (selectedFile.size > 3000000) {
            showToast("error", "File size must not be larger than 3mb");
            return;
        }
        dispatch({ name: "thumbnail", value: selectedFile });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!state.code || !state.date || !state.desc || !state.discord || !state.map || !state.mode || !state.number || !state.thumbnail || !state.time || !state.tournamentName || !state.twitter) {
            showToast('error', 'Fill all form values')
            return
        }

        createTournament({ ...state, thumbnail: state.thumbnail })
    }

    useEffect(() => {
        if (success) {
            router.push("/tournaments")
            showToast('success', 'Tournament created')
        }
    }, [success]);

    return (

        <div className='w-full flex-center flex-col gap-8 p-[5%] bg-pry-grey rounded-lg'>
            <div className="flex-center">
                <h1 className="title-text text-pry-black">Register your tournament</h1>
            </div>
            <form className='w-full max-w-lg flex items-stretch justify-center gap-4 md:gap-6 flex-col'>
                <label className="relative">
                    <input
                        required
                        type="text"
                        title="Tournament Name"
                        name="tournamentName"
                        placeholder="Tournament Name"
                        value={state.tournamentName}
                        onChange={handleChange}
                    />
                </label>
                <label className="w-full relative">
                    <input
                        required
                        type="tel"
                        title="code"
                        name="code"
                        placeholder="Tournament Code"
                        value={state.code}
                        onChange={handleChange}
                    />
                </label>
                <div>
                    <p className="body-text">
                        Game Mode
                    </p>
                    <label className="w-full flex-start gap-4">
                        {
                            gameOptions.map((item, i) => (
                                <div key={i} className="flex-center gap-1">
                                    <div className="rounded-full w-4 h-4 overflow-hidden border border-pry-black">
                                        <input
                                            type="radio"
                                            value={item.value}
                                            checked={state.mode === item.value}
                                            onChange={() => dispatch({ name: 'mode', value: item.value })}
                                            className="cursor-pointer appearance-none checked:bg-pry-black checked:border-none focus:outline-none"
                                        />
                                    </div>
                                    <span className="body-text text-pure-black">{item.label}</span>
                                </div>
                            ))}
                    </label>
                </div>
                <div>
                    <p className="body-text">
                        CODM Map
                    </p>
                    <label className="w-full flex-start gap-4">
                        {
                            mapType.map((item, i) => (
                                <div key={i} className="flex-center gap-1">
                                    <div className="rounded-full w-4 h-4 overflow-hidden border border-pry-black">
                                        <input
                                            type="radio"
                                            value={item.value}
                                            checked={state.map === item.value}
                                            onChange={() => dispatch({ name: 'map', value: item.value })}
                                            className="cursor-pointer appearance-none checked:bg-pry-black checked:border-none focus:outline-none"
                                        />
                                    </div>
                                    <span className="body-text text-pure-black">{item.label}</span>
                                </div>
                            ))}
                    </label>
                </div>
                <label className="w-full relative flex-start gap-4">
                    <span className="body-text my-auto">
                        Date:
                    </span>
                    <input
                        className="h-10 w-40 py-0"
                        required
                        type="date"
                        name="date"
                        value={state.date}
                        onChange={(e) => dispatch({ name: 'date', value: e.target.value })}
                    />
                </label>
                <label className="w-full relative flex-start gap-4">
                    <span className="body-text my-auto">
                        Time:
                    </span>
                    <input
                        className="h-10 w-28 py-0"
                        required
                        type="time"
                        name="time"
                        value={state.time}
                        onChange={(e) => dispatch({ name: 'time', value: e.target.value })}
                    />
                </label>
                <div className="w-64 h-64 relative flex-start flex-col gap-2">
                    <p className='body-text'>Tournament Logo</p>
                    {
                        state.thumbnail ?
                            <img src={URL.createObjectURL(state.thumbnail)} alt="selected picture" className="w-full h-full object-contain object-center" />
                            :
                            <label className='w-full border border-[#d4d4d4] flex-center h-full cursor-pointer'>
                                <span className='btn black-btn flex-center'>Upload image</span>
                                <input
                                    required
                                    type="file"
                                    title="file"
                                    name="thumbnail"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className='hidden'
                                />
                            </label>
                    }
                    {state.thumbnail && <button type="button" className="btn black-btn mt-4" onClick={() => dispatch({ name: 'thumbnail', value: null })}>Remove image</button>}
                </div>
                <label className="w-full relative">
                    <span className="block mb-2 body-text">
                        Give a brief description about the tournament
                    </span>
                    <textarea
                        required
                        title="about tournament"
                        name="desc"
                        value={state.desc}
                        onChange={handleChange}
                    />
                </label>
                <label className="relative">
                    <input
                        required
                        type="text"
                        title="Phone Number"
                        name="number"
                        placeholder="Your phone number"
                        value={state.number}
                        onChange={handleChange}
                    />
                </label>
                <label className="relative">
                    <input
                        required
                        type="text"
                        title="discord"
                        name="discord"
                        placeholder="Your discord"
                        value={state.discord}
                        onChange={handleChange}
                    />
                </label>
                <label className="relative">
                    <input
                        required
                        type="text"
                        title="twitter"
                        name="twitter"
                        placeholder="Your Twitter Link"
                        value={state.twitter}
                        onChange={handleChange}
                    />
                </label>
                <div className='flex-end mt-6'>
                    <button type='submit' className="cta-btn btn" disabled={pending} onClick={handleSubmit}>
                        {pending ? <Loader /> : 'Register'}
                    </button>
                </div>
            </form>
        </div>
    )
}
