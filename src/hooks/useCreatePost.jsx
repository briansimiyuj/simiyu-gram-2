import { useState } from "react"
import { useShowToast } from "./useShowToast"
import { useAuthStore } from "../store/authStore"
import { usePostStore } from "../store/postStore"
import profileStore from "../store/profileStore"
import { useLocation } from "react-router-dom"
import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore"
import { firestore, storage } from "../firebase/config"
import { getDownloadURL, ref, uploadString } from "firebase/storage"

export const useCreatePost = () => {

   const showToast = useShowToast(),
         [loading, setLoading] = useState(false),
         authUser = useAuthStore(state => state.user),
         createPost  = usePostStore(state => state.createPost),
         addPost =  profileStore(state => state.addPost)


   const handleCreatePost = async(selectedFile, caption) => {

      if(!selectedFile) throw new Error('Please select an file')

      setLoading(true)

      const newPost = {
         caption,
         createdAt: Date.now(),
         createdBy: authUser.userId,
         likes: [],
         comments: []
      }


      try{
      
         const postDocRef = await addDoc(collection(firestore, "posts"), newPost),
               userDocRef = doc(firestore, "users", authUser.userId),
               imageRef = ref(storage, `posts/${postDocRef.id}`)

         await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) }),
               uploadString(imageRef, selectedFile, "data_url")
         const downloadURL = await getDownloadURL(imageRef)

         await updateDoc(postDocRef, { image: downloadURL })

         newPost.image = downloadURL


         createPost({ ...newPost, id: postDocRef.id })

         addPost({ ...newPost, id: postDocRef.id })


         showToast("Success", "Post uploaded successfully", "success")
      
      }catch(error){
      
         showToast("Error", error.message, "error")
      
      }finally{
         
         setLoading(false)
      
      }
         
   }

   return { loading, handleCreatePost }

}