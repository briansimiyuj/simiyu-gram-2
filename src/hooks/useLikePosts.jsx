import { useState } from "react"
import { useShowToast } from "./useShowToast"
import { useAuthStore } from "../store/authStore"
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { firestore } from "../firebase/config"

export const useLikePosts = (post) =>{

    const authUser = useAuthStore(state => state.user),
          [likes, setLikes] = useState(post.likes.length),
          [liked, setLiked] = useState(post.likes.includes(authUser?.userId)),
         showToast = useShowToast()


    const handleLikePost = async() =>{

        if(!authUser) return showToast("Error", "Please sign in to like posts", "error")


        try{
        
            const postDocRef = doc(firestore, "posts", post.postId)

            await updateDoc(postDocRef, {
                
                likes: liked ? arrayRemove(authUser?.userId) : arrayUnion(authUser?.userId)

            })

            setLiked(!liked)

            liked ? setLikes(likes - 1) : setLikes(likes + 1)

        
        }catch(error){
        
            showToast("Error", error.message, "error")
        
        }

    }
 
    return { liked, likes, handleLikePost }

}