import { Flex, Box, Text } from '@chakra-ui/react'
import { NotificationsLogo, UnlikeLogo, CommentLogo } from '../../assets/constants'
import { useState } from'react'

const PostFooter = () =>{

    const [liked, setLiked] = useState(false),
          [likes, setLikes] = useState(1000)


    const handleLikePost = () => {
    
        if(liked){

            setLiked(false)
            
            setLikes(likes - 1)

        }else{

            setLiked(true)

            setLikes(likes + 1)

        }
    
    }

    return(

        <>
        
            <Flex
                alignItems={"center"}
                gap={4}
                w={"full"}
                pt={0}
                mb={2}
                mt={3}
            >

                <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>

                    {

                        !liked? (<NotificationsLogo/>) : (<UnlikeLogo/>)

                    }

                </Box>


                <Box cursor={"pointer"} fontSize={18}>

                    <CommentLogo/>

                </Box>

            </Flex>


            <Text fontWeight={600} fontSize={"sm"}>{likes} likes</Text>


            <Text fontSize='sm' fontWeight={700}>   

                chrishan.dev{" "}

                <Text as="span" fontWeight={400}>Feeling Good</Text>

                <Text fontSize='sm' color={"gray"}>View all 1,000 comments</Text>

            </Text>
        
        </>

    )

}

export default PostFooter 