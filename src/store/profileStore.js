import { create } from "zustand"

export const profileStore = create((set) => ({
    
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile })

}))

export default profileStore