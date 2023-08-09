import { State } from '@/types/store'
import { create } from 'zustand'

export const useAuthStore = create<State>()((set) => ({
    user: null,
    loginUser: (user) => set(() => ({ user: user })),
    logoutUser: () => set(() => ({ user: null }))
}))
