import { create } from "zustand"

const profileStore = create((set) => ({
    
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile })

}))