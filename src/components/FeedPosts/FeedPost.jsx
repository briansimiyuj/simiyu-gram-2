import { useGetUserProfileById } from "../../hooks/useGetUserProfileById"
import { useAuthStore } from "../../store/authStore"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import { Box, Image } from "@chakra-ui/react"
import PostHeaderProfile from "./PostHeaderProfile"

const FeedPost = ({ post,  postImage, isProfilePage }) =>{

    const { userProfile } = useGetUserProfileById(post.createdBy)

    return(

        <>
        
            { 
            
                !isProfilePage ?
                
                    <PostHeader post={post} userProfile={userProfile}/>
                :
                    <PostHeaderProfile post={post} userProfile={userProfile}/>
                    
                }


            <Box my={2} borderRadius={4} overflow={"hidden"}>

                <Image src={post.image} alt={"username"}/>

            </Box>


            <PostFooter post={post} userProfile={userProfile} />
        
        </>

    )

}

export default FeedPost