import { useState } from "react"
import { useAuthStore } from "../store/authStore"
import { useShowToast } from "./useShowToast"
import { firestore } from "../firebase/config"
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { usePostStore } from "../store/postStore"

export const useDeleteComment = () =>{

   const authUser = useAuthStore(state => state.user),
         [deleting, setDeleting] = useState(false),
         showToast = useShowToast(),
         deleteComment = usePostStore(state => state.deleteComment)


    const handleDeleteComment = async(postId, commentId) =>{
    
       setDeleting(true)

       if(deleting) return


        try{
       
          setDeleting(true)

          const commentRef = doc(firestore, "posts", postId, "comments", commentId)

          await deleteDoc(commentRef)

          await updateDoc(doc(firestore, "posts", postId), { comments: arrayRemove(commentRef) })

          deleteComment(postId, commentId)
       
        }catch(error){
       
           showToast("Error", error.message, "error")
       
        }finally{

            setDeleting(false)

        }
    
    }

    return { handleDeleteComment, deleting }

}