import { useEffect, useState } from "react"
import { usePostStore } from "../store/postStore"
import { useShowToast } from "./useShowToast"
import { useAuthStore } from "../store/authStore"
import profileStore from "../store/profileStore"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestore } from "../firebase/config"

export const useGetFeedPosts = () =>{

    const [loading, setLoading] = useState(true),
          { posts, setPosts } = usePostStore(),
          showToast = useShowToast(),
          authUser = useAuthStore(state => state.user),
          { userProfile } = profileStore()


    useEffect(() => {
        
        const getFeedPosts = async() =>{
        
           setLoading(true)

            if(authUser.following.length === 0){

                setLoading(false)

                setPosts([])

                return

            }
            

            try{
                
                const q = query(collection(firestore, "posts"), where("createdBy", "in", authUser.following)),
                      querySnapshot = await getDocs(q),
                      feedPosts = []

                querySnapshot.forEach(doc => feedPosts.push({ ...doc.data(), postId: doc.id }))

                feedPosts.sort((a, b) => b.createdAt - a.createdAt)

                setPosts(feedPosts)
                
           
            }catch(error){
           
                showToast("Error", error.message, "error")
           
            }finally{

                setLoading(false)
                 
            }
        
        }

        if(authUser) getFeedPosts()

    }, [authUser, showToast, setPosts, userProfile])

    return { loading, posts }

}