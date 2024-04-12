import { useState } from "react"
import { useAuthStore } from "../store/authStore"
import { useShowToast } from "./useShowToast"
import { getDownloadURL, ref, uploadString } from "firebase/storage"
import { storage, firestore } from "../firebase/config"
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import profileStore from "../store/profileStore"

export const useEditProfile = () =>{

    const [isUpdating, setIsUpdating] = useState(false),
          authUser = useAuthStore(state => state.user),
          setAuthUser = useAuthStore(state => state.setUser),
          setUserProfile = profileStore(state => state.setUserProfile),
          showToast = useShowToast()


    const editProfile = async(inputs, selectedFile) =>{
    
      if(isUpdating || !authUser) return

      setIsUpdating(true)

      const userRef = collection(firestore, "users"),
              q = query(userRef, where("username", "==", inputs.username)),
              querySnapshot = await getDocs(q)

        if(!querySnapshot.empty){

            showToast("Error", "Please choose a different username", "error")
            
            return

        }

      const storageRef = ref(storage, `profilePics/${authUser.userId}`),
            userDocRef = doc(firestore, "users", authUser.userId)

      let URL

      try{
      
        if(selectedFile){

          await uploadString(storageRef, selectedFile, "data_url")

          URL = await getDownloadURL(storageRef)

        }


        const updatedUser ={

          ...authUser,
          fullName: inputs.fullName || authUser.fullName,
          username: inputs.username || authUser.username,
          bio: inputs.bio || authUser.bio,
          website: inputs.website || authUser.website,
          profilePicURL: URL || authUser.profilePicURL

        }

        await updateDoc(userDocRef, updatedUser)

        localStorage.setItem("user-info", JSON.stringify(updatedUser))

        setAuthUser(updatedUser)

        setUserProfile(updatedUser)

        showToast("Success", "Profile updated successfully", "success")
      
      }catch(error){
      
        showToast("Error", error.message, "error")
      
      }
    
    }

    return { editProfile, isUpdating }

}