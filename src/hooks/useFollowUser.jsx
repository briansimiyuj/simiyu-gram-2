import { useEffect, useState } from "react"
import { useAuthStore } from "../store/authStore"
import profileStore from "../store/profileStore"
import { useShowToast } from "./useShowToast"
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { firestore } from "../firebase/config"

export const useFollowUser = (userID) =>{

   const [isUpdating, setIsUpdating] = useState(false),
         [isFollowingUser, setIsFollowingUser] = useState(false),
         authUser = useAuthStore(state => state.user), 
         setAuthUser = useAuthStore(state => state.setUser),
         { userProfile, setUserProfile } = profileStore(),
         showToast = useShowToast()

    const handleFollowUser = async() =>{

        setIsUpdating(true)

        try{
        
           const currentUserRef = doc(firestore, "users", authUser.userId),
                 usersToFollowRef = doc(firestore, "users", userID) 

            await updateDoc(currentUserRef, {
                
                following: isFollowingUser ? arrayRemove(userID) : arrayUnion(userID)
                
            })


            await updateDoc(usersToFollowRef, {

                followers: isFollowingUser ? arrayRemove(authUser.userId) : arrayUnion(authUser.userId)

            })


            if(isFollowingUser){

                setAuthUser({

                    ...authUser,
                    following: authUser.following.filter(user => user!== userID)
                    
                })


                setUserProfile({

                    ...userProfile,
                    followers: userProfile.followers.filter(user => user!== authUser.userId)

                })

                localStorage.setItem("user-info", JSON.stringify({

                    ...authUser,
                    following: authUser.following.filter(user => user!== userID)

                }))

                setIsFollowingUser(false)

            }else{

                setAuthUser({

                    ...authUser,
                    following: [...authUser.following, userID]

                })

                setUserProfile({

                    ...userProfile,
                    followers: [...userProfile.followers, authUser.userId]

                })


                localStorage.setItem("user-info", JSON.stringify({

                    ...authUser,
                    following: [...authUser.following, userID]

                }))


                setIsFollowingUser(true)

            }


            if(isFollowingUser){

                setAuthUser({

                    ...authUser,
                    following: authUser.following.filter(user => user!== userID)
                    
                })


                setUserProfile({

                    ...userProfile,
                    followers: userProfile.followers.filter(user => user!== authUser.userId)

                })

                localStorage.setItem("user-info", JSON.stringify({

                    ...authUser,
                    following: authUser.following.filter(user => user!== userID)

                }))

                setIsFollowingUser(false)

            }else{

                setAuthUser({

                    ...authUser,
                    following: [...authUser.following, userID]

                })

                setUserProfile({

                    ...userProfile,
                    followers: [...userProfile.followers, authUser.userId]

                })


                localStorage.setItem("user-info", JSON.stringify({

                    ...authUser,
                    following: [...authUser.following, userID]
                    
                }))


                setIsFollowingUser(true)

            }

        
        }catch(error){
        
            showToast("Error", error.message, "error")    
        
        }finally{
        
            setIsUpdating(false)

        }
        
    }


    useEffect(() =>{
    
        if(authUser){

          const isFollowingUser = authUser.following.includes(userID)

          setIsFollowingUser(isFollowingUser)

        }
    
    }, [authUser, userID])


    return { isUpdating, isFollowingUser, handleFollowUser }

}