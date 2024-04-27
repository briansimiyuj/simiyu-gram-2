import { create } from "zustand"

export const usePostStore = create((set) => ({
    
    posts: [],
    createPost: (post) => set(state => ({ posts: [post, ...state.posts] })),
    setPosts: (posts) => set({ posts }),
    deletePost: (id) => set(state => ({ posts: state.posts.filter(post => post.postId !== id) }))

}))