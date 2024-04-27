import { useGetUserProfileById } from "../../hooks/useGetUserProfileById"
import { useAuthStore } from "../../store/authStore"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import { Box, Image } from "@chakra-ui/react"

const FeedPost = ({ post }) =>{

    const { userProfile } = useGetUserProfileById(post.createdBy)

    return(

        <>
        
            <PostHeader post={post} userProfile={userProfile}/>


            <Box my={2} borderRadius={4} overflow={"hidden"}>

                <Image src={post.image} alt={"username"}/>

            </Box>


            {/* <PostFooter username={username}/> */}
        
        </>

    )

}

export default FeedPost