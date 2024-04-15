import { useState } from "react"
import { useShowToast } from "./useShowToast"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestore } from "../firebase/config"

export const useSearchUser = () =>{

   const [loading, setLoading] = useState(false),
         [user, setUser] = useState(null),
         showToast = useShowToast()


    const searchUser = async (username) =>{

        setLoading(true)

        try{
        
            const q = query(collection(firestore, "users"), where("username", "==", username)),
                  querySnapshot = await getDocs(q)

            if(querySnapshot.empty) return showToast("Error", "User not found", "error")

            querySnapshot.forEach(doc => setUser(doc.data()))
        
        }catch(error){
        
            showToast("Error", error.message, "error")         
            
            setUser(null)
        
        }finally{

            setLoading(false)

        }

    }

    return { loading, user, searchUser, setUser }

}