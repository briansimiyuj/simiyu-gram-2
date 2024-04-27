import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import { Box, Image } from "@chakra-ui/react"

const FeedPost = ({ post }) =>{

    return(

        <>
        
            {/* <PostHeader post={post}/> */}


            <Box my={2} borderRadius={4} overflow={"hidden"}>

                <Image src={post.image} alt={"username"}/>

            </Box>


            {/* <PostFooter username={username}/> */}
        
        </>

    )

}

export default FeedPost