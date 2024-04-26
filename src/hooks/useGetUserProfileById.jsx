import { useEffect, useState } from "react"
import { useShowToast } from "./useShowToast"
import { doc, getDoc } from "firebase/firestore"
import { firestore } from "../firebase/config"

export const useGetUserProfileById = (userId) =>{

    const [loading, setLoading] = useState(true),
            [userProfile, setUserProfile] = useState(null),
            showToast = useShowToast()


    useEffect(() =>{
    
        const  getUserProfile = async() =>{
            
            setLoading(true)

            setUserProfile(null)
        
        
            try{
            
                const userRef = await getDoc(doc(firestore, "users", userId))

                if(userRef.exists()) setUserProfile(userRef.data())
            
            }catch(error){
            
                showToast("Error", error.message, "error")
            
            }finally{
            
                setLoading(false)

            }
        
        }

        getUserProfile()
    
    }, [showToast, userId, setUserProfile]) 

    return { userProfile, loading, setUserProfile }

}