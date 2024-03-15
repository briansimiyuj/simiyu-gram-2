import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import { Box, Image } from "@chakra-ui/react"
import img1 from '../../../img/img1.png'

const FeedPost = () =>{

    return(

        <>
        
            <PostHeader/>


            <Box>

                <Image src={img1} alt="User Profile Picture" />

            </Box>


            <PostFooter/>
        
        </>

    )

}

export default FeedPost