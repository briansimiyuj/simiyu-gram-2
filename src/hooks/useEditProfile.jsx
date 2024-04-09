import { useState } from "react"
import { useAuthStore } from "../store/authStore"
import { useShowToast } from "./useShowToast"
import { ref, uploadString } from "firebase/storage"
import { storage, firestore } from "../firebase/config"
import { doc } from "firebase/firestore"

export const useEditProfile = () =>{

    const [isUpdating, setIsUpdating] = useState(false),
          authUser = useAuthStore(state => state.user),
          showToast = useShowToast()


    const editProfile = async(inputs, selectedFile) =>{
    
       if(isUpdating || !authUser) return

       setIsUpdating(true)

       const storageRef = ref(storage, `profilePic/${authUser.uid}`),
             userDocRef = doc(firestore, "users", authUser.uid)


        try{
       
          if(selectedFile){

            await uploadString(storageRef, selectedFile, "data_url")

          }
       
        }catch(error){
       
          showToast("Error", error.message, "error")
       
        }
    
    }

}