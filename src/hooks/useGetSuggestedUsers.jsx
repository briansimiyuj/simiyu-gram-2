import { useEffect, useState } from "react"
import { useAuthStore } from "../store/authStore"
import { useShowToast } from "./useShowToast"
import { firestore } from "../firebase/config"
import { collection, doc, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore"

export const useGetSuggestedUsers = () =>{

    const [loading, setLoading] = useState(true),
          [suggestedUsers, setSuggestedUsers] = useState([]),
          [suggestedUser, setSuggestedUser] = useState(true),
          authUser = useAuthStore(state => state.user),
          showToast = useShowToast()


    useEffect(() =>{
    
        const getSuggestedUsers = async () =>{

            setLoading(true)

            try{

                const userRef = doc(firestore, "users", authUser.userId),
                      userDoc = await getDoc(userRef),
                     disableSuggestedUsers = userDoc.data()?.disableSuggestedUsers || false
            
                if(!disableSuggestedUsers){

                    const usersRef = collection(firestore, "users"),
                        
                    q = query(

                        usersRef,
                        where("userId", "not-in", [authUser.userId, ...authUser.following]),
                        orderBy("userId"),
                        limit(3)

                    ),

                    querySnapshot = await getDocs(q),
                    users = []

                    querySnapshot.forEach(doc =>{

                        users.push({ ...doc.data(), userId: doc.id })

                    })

                    setSuggestedUsers(users)

                }else{

                    setSuggestedUser([])

                }
            
            }catch(error){
            
                showToast("Error", error.message, "error")
            
            }finally{

                setLoading(false)

            }

        }

        if(authUser) getSuggestedUsers()
    
    }, [authUser, showToast])

    return { loading, suggestedUsers }

}