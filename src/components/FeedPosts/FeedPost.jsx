import { useGetUserProfileById } from "../../hooks/useGetUserProfileById"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import { Box, Image } from "@chakra-ui/react"
import PostHeaderProfile from "./PostHeaderProfile"
import { useState } from "react"

const FeedPost = ({ post,  postImage, isProfilePage }) =>{

    const { userProfile } = useGetUserProfileById(post.createdBy),
          [isEditing, setIsEditing] = useState(false)

    return(

        <>
        
            { 
            
                !isProfilePage ?
                
                    <PostHeader post={post} userProfile={userProfile}/>
                :
                    <PostHeaderProfile 
                        post={post} 
                        userProfile={userProfile} 
                        postImage={postImage} 
                        isEditing={isEditing} 
                        setIsEditing={setIsEditing}
                        isProfilePage={isProfilePage}
                    />
                    
                }


            <Box my={2} borderRadius={4} overflow={"hidden"}>

                <Image src={post.image} alt={"username"}/>

            </Box>


            <PostFooter post={post} userProfile={userProfile} />
        
        </>

    )

}

export default FeedPost