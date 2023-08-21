// react imports
import { useEffect, useReducer, Dispatch, SetStateAction } from "react";
// toasts
import { showToast } from "@/functions/toast";
// components;
import Loader from "../Loader/Loader";
// hooks
import useUpdateCollection from "@/hooks/useUpdateCollection";

const initialState = {
    email: '',
    ign: '',
}

type stateType = typeof initialState

type authType = {
    name: 'email' | 'ign',
    value: string
}

const authReducer = (state: stateType, action: authType) => {
    return { ...state, [action.name]: action.value }
}

interface Props {
    setShowForm: Dispatch<SetStateAction<boolean>>
}


export default function AddPlayerForm({ setShowForm }: Props) {

    const [state, dispatch] = useReducer(authReducer, initialState)

    const { pending, success, addPlayerToTeam } = useUpdateCollection()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'email' || e.target.name === 'ign') dispatch({ name: e.target.name, value: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (state.email && state.ign) {
            addPlayerToTeam({ email: state.email, ign: state.ign });
        } else {
            showToast('error', 'Fill all form values')
        }
    }

    useEffect(() => {
        if (success) {
            showToast('success', `${state.ign} has been registered`)
            setShowForm(false)
        }
    }, [success])


    return (
        <div className="flex-center fixed top-0 right-0 left-0 bottom-0 w-full h-full p-[5%]">
            <div className="bg-black opacity-90 absolute top-0 right-0 left-0 bottom-0 w-full h-full z-10"></div>
            <div className="body-text text-white bg-red-600 h-8 w-8 flex-center text-center absolute right-0 top-0 z-20 cursor-pointer" onClick={() => setShowForm(false)}>x</div>
            <form className='w-full max-w-sm flex items-stretch justify-center gap-4 md:gap-6 flex-col bg-pry-white rounded-2xl p-6 z-20' onSubmit={handleSubmit}>
                <label className="w-full h-[2.8125rem] relative">
                    <input
                        required
                        type="text"
                        title="email"
                        name="email"
                        placeholder="e-mail"
                        value={state.email}
                        onChange={handleChange}
                    />
                </label>
                <label className="w-full h-[2.8125rem] relative">
                    <input
                        required
                        type="text"
                        title="player tag"
                        name="ign"
                        placeholder="input player tag"
                        value={state.ign}
                        onChange={handleChange}
                    />
                </label>
                <div className='flex-start mt-6'>
                    <button type='submit' className="cta-btn btn" disabled={pending} onClick={handleSubmit}>{pending ? <Loader /> : 'Add Player'}</button>
                </div>
            </form>
        </div>
    )
}
