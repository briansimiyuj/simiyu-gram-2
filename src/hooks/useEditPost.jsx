import { useState } from "react"
import { useShowToast } from "./useShowToast"
import { getDownloadURL, ref, uploadString } from "firebase/storage"
import { firestore, storage } from "../firebase/config"
import { doc } from "firebase/firestore"

export const useEditPost = () =>{

    const [isEditingPost, setIsEditingPost] = useState(false),
          showToast = useShowToast()
          
    
    const handleEditPost = async(post, selectedFile) =>{
    
       setIsEditingPost(true)

       if(isEditingPost) return

    
    const postRef = ref(storage, `posts/${post.postId}`)

    let URL

        try{            

            if(selectedFile){

                await uploadString(postRef, selectedFile, "data_url")

                URL = await getDownloadURL(postRef)

            }

            console.log(URL)
       
        }catch(error){
       
           showToast("Error", error.message, "error")
       
        }finally{

            setIsEditingPost(false)

        }
    
    }

    return { isEditingPost, handleEditPost }

}