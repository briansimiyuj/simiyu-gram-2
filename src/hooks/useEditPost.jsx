import { useState } from "react"
import { useShowToast } from "./useShowToast"
import { getDownloadURL, ref, uploadString } from "firebase/storage"
import { firestore, storage } from "../firebase/config"
import { doc, updateDoc } from "firebase/firestore"

export const useEditPost = () =>{

    const [isEditingPost, setIsEditingPost] = useState(false),
          [editedPost, setEditedPost] = useState(false),
          [newCaption, setNewCaption] = useState(null),
          [isEditing, setIsEditing] = useState(false),
          showToast = useShowToast()
          
    
     const handleEditPost = async(post, selectedFile, caption, onClose) =>{
    
       setIsEditingPost(true)

       setIsEditing(true)

       if(isEditingPost) return

        if(!post.caption){

            setNewCaption(caption)

        }


        if(!post.caption){

            setNewCaption(caption)

        }


        const postRef = ref(storage, `posts/${post.postId}`),
            postDocRef = doc(firestore, "posts", post.postId)

        let URL

        try{            

            if(selectedFile){

                await uploadString(postRef, selectedFile, "data_url")

                URL = await getDownloadURL(postRef)

            }

        
            const updatedPost = {
                
                ...post,
                image: URL ? URL : post.image,
                caption: caption ? caption : post.caption,
                updatedAt: Date.now()

            }

            updateDoc(postDocRef, updatedPost)

            setEditedPost(true)

            showToast("Success", "Post updated successfully", "success")
       
        }catch(error){
       
           showToast("Error", error.message, "error")
       
        }finally{

            setIsEditingPost(false)

            setIsEditing(false)

            onClose()

        }
    
    }

    return { isEditingPost, isEditing, editedPost, handleEditPost }

}