import { useState } from "react"
import { useAuthStore } from "../store/authStore"
import { useShowToast } from "./useShowToast"
import { firestore, storage } from "../firebase/config"
import { deleteObject, ref } from "firebase/storage"
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { usePostStore } from "../store/postStore"

export const useDeletePost = () =>{

   const authUser = useAuthStore(state => state.user),
         showToast = useShowToast(),
         [isDeleting, setIsDeleting] = useState(false),
         deletePost = usePostStore(state => state.deletePost)


    const deleteUserPost = async(post) =>{

        if(!window.confirm("Are you sure you want to delete this post?")) return

        setIsDeleting(true)

        if(isDeleting) return
    
        try{
       
            const imageRef = ref(storage, `posts/${post.postId}`),
                  userDocRef = doc(firestore, "users", authUser.userId)

            await deleteObject(imageRef),
                  deleteDoc(doc(firestore, "posts", post.postId)),
                  updateDoc(userDocRef, { posts: arrayRemove(post.postId) })


            deletePost(post.postId)

            showToast("Success", "Post deleted successfully", "success")

       
        }catch(error){
       
           showToast("Error", error.message, "error")
       
        }finally{

            setIsDeleting(false)

        }
    
    }

    return { isDeleting, deleteUserPost }

}