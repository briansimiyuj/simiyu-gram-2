import { auth } from "../firebase/config"
import { useSignOut } from "react-firebase-hooks/auth"
import { useShowToast } from "./useShowToast"
import {  useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore"

export const useLogOut = () =>{

    const [ signOut, isSigningOut ] = useSignOut(auth),
          showToast = useShowToast(),
          navigate = useNavigate(),
          signOutUser = useAuthStore(state => state.signout)


    const handleSignOut = async() =>{
    
      try{
      
        await signOut()

        localStorage.removeItem("user-info")

        signOutUser()
      
      }catch(error){
      
          showToast("Error", error.message, "error")
      
      }
    
    }

   return { handleSignOut, isSigningOut }

}