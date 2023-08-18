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
    teamname: "",
    password: "",
    squadType: '',
    thumbnail: null,
};

type authState = {
    teamname: string;
    password: string;
    squadType: string;
    thumbnail: File | null;
};

type authActions =
    | { name: 'teamname' | 'password' | 'squadType'; value: string }
    | { name: "thumbnail"; value: File | null };

const authReducer = (state: authState, action: authActions) => {
    return { ...state, [action.name]: action.value };
};

const options: Array<{ value: string, label: string }> = [
    { value: 'duo', label: 'DUO' },
    { value: 'squad', label: 'SQUAD' },
];

export default function RegisterTeam() {

    const [state, dispatch] = useReducer(authReducer, initialState);

    const router = useRouter()

    const { registerTeam, pending, success } = useAddToCollection();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'teamname' || e.target.name === 'password') dispatch({ name: e.target.name, value: e.target.value })
    };

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
        e.preventDefault();

        if (!state.teamname || !state.password || !state.squadType || !state.thumbnail) {
            showToast('error', 'Fill all form values')
            return
        }

        registerTeam({
            name: state.teamname,
            password: state.password,
            sqaudType: state.squadType,
            thumbnail: state.thumbnail
        })


    };

    useEffect(() => {
        if (success) {
            router.push("/my-team")
            showToast('success', 'Team successfully registered')
        }
    }, [success]);

    return (
        <div className='w-full md:w-3/4 flex-start flex-col gap-8 p-[5%] bg-pry-grey rounded-lg'>
            <div className="flex-start flex-col gap-4">
                <h1 className="title-text text-pry-black">Your Team</h1>
                <p className="body-text text-pry-black">Register your team!</p>
            </div>
            <form className='w-full max-w-xl flex items-stretch justify-center gap-4 md:gap-6 flex-col'>
                <label className="w-full h-[2.8125rem] relative">
                    <input
                        required
                        type="text"
                        title="team name"
                        name="teamname"
                        placeholder="team name"
                        value={state.teamname}
                        onChange={handleChange}
                    />
                </label>
                <label className="w-full h-[2.8125rem] relative">
                    <input
                        required
                        type="tel"
                        title="password"
                        name="password"
                        placeholder="Team pin"
                        maxLength={4}
                        value={state.password}
                        onChange={handleChange}
                    />
                </label>
                <label className="w-full flex-start gap-4">
                    {
                        options.map((item, i) => (
                            <div key={i} className="flex-center gap-1">
                                <div className="rounded-full w-4 h-4 overflow-hidden border border-pry-black">
                                    <input
                                        type="radio"
                                        value={item.value}
                                        checked={state.squadType === item.value}
                                        onChange={() => dispatch({ name: 'squadType', value: item.value })}
                                        className="cursor-pointer appearance-none checked:bg-pry-black checked:border-none focus:outline-none"
                                    />
                                </div>
                                <span className="body-text text-pure-black">{item.label}</span>
                            </div>
                        ))}
                </label>
                <div className="w-full h-72 relative flex-start flex-col gap-2">
                    <p className='body-text'>Team Logo</p>
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
                <div className='flex-end mt-6'>
                    <button type='submit' className="cta-btn btn" disabled={pending} onClick={handleSubmit}>{pending ? <Loader /> : 'Register'}</button>
                </div>
            </form>
        </div>
    )
}
