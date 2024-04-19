import { create } from "zustand"

export const profileStore = create((set) => ({
    
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile }),
    addPost: (post) => set(state =>({

        //This is used to update the number of posts in the profile page
        userProfile:{
           ...state.userProfile,
            posts: [post,...state.userProfile.posts]
        }

    }))

}))

export default profileStore