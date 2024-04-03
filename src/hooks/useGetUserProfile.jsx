import { useState, useEffect } from "react"
import { useShowToast } from "./useShowToast"
import { firestore } from "../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import profileStore from "../store/profileStore"

export const useGetUserProfile = (username) => {

   const [loading, setLoading] = useState(true),
         showToast = useShowToast(),
         { userProfile, setUserProfile } = profileStore()


    useEffect(() =>{
   
        const getUserProfile = async() => {

            setLoading(true)

            try{
            
               const q = query(collection(firestore, "users"), where("username", "==", username)),
                     querySnapshot = await getDocs(q)


                if(querySnapshot.empty) return setUserProfile(null)

                let userDoc

                querySnapshot.forEach(doc => userDoc = doc.data())

                setUserProfile(userDoc)
            
            }catch(error){
            
                showToast("Error", error.message, "error")
            
            }finally{
            
                setLoading(false)
            
            }

        }

        getUserProfile()
    
    }, [setUserProfile, showToast, username])


    return { loading, userProfile }

}