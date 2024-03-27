import { create } from "zustand"

export const useAuthStore = create((set) => ({
    
    user: JSON.parse(localStorage.getItem("user-info")),
    signin: (user) => set({ user }),
    signout: () => set({ user: null }),  
    setUser: (user) => set({ user }),

}))