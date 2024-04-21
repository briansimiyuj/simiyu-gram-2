import { useEffect, useState } from "react"
import { useShowToast } from "./useShowToast"
import { usePostStore } from "../store/postStore"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestore } from "../firebase/config"
import { useAuthStore } from "../store/authStore"
import profileStore from "../store/profileStore"

export const useGetUserPosts = (username) => {

   const [loading, setLoading] = useState(true),
         showToast = useShowToast(),
         authUser = useAuthStore(state => state.user),
         { posts, setPosts } = usePostStore(),
         userProfile = profileStore(state => state.userProfile)

    
    useEffect(() =>{

        const getUserPosts = async() =>{

            if(!userProfile) return

            setLoading(true)

            setPosts([])

            try{
            
                const q = query(collection(firestore, "posts"), where("createdBy", "==", userProfile.userId)),
                      querySnapshot = await getDocs(q)

                if(querySnapshot.empty) return setPosts(null)

                let posts = []

                querySnapshot.forEach(doc =>{
                    
                    posts.push({ ...doc.data(), postId: doc.id })

                })

                posts.sort((a, b) => b.createdAt - a.createdAt)
                
                setPosts(posts)

            
            }catch(error){
            
                showToast("Error", error.message, "error")
                
                setPosts([])
            
            }finally{
            
                setLoading(false)

            }

            
        }
        
        
        getUserPosts()

    }, [setPosts, showToast, userProfile])

    return { loading, posts }

}