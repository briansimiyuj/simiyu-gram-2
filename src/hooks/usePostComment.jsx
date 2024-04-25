import { useState } from "react"
import { useShowToast } from "./useShowToast"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { usePostStore } from "../store/postStore"
import { useAuthStore } from "../store/authStore"
import { firestore } from "../firebase/config"

export const usePostComment = () =>{

   const [commenting, setCommenting] = useState(false),
         [userComment, setUserComment] = useState(''),    
         showToast = useShowToast(),
         authUser = useAuthStore(state => state.user),
         addComment = usePostStore(state => state.addComment)


    const handlePostComment = async(postId, comment) =>{
   
        setCommenting(true)

        if(!authUser) return showToast("Error", "Please sign in to comment", "error")

        if(commenting) return

        if(comment === '') return 

        const newComment = {

            comment,
            createdAt: Date.now(),
            createdBy: authUser.userId,
            postId,
            likes: [],
            replies: []

        }


        try{
        
            await updateDoc(doc(firestore, "posts", postId), { comments: arrayUnion(newComment) })

            addComment(postId, newComment)
        
        }catch(error){
        
            showToast("Error", error.message, "error")         
        
        }finally{

            setCommenting(false)

        }
    
    }

    return { handlePostComment, commenting, userComment, setUserComment }

}