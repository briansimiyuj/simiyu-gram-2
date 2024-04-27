import { Flex, Box, Avatar, Text } from '@chakra-ui/react'
import { useState } from 'react'

const PostHeader = ({ post }) =>{

    const [isFollowed, setIsFollowed] = useState(false)

    return(

        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>

            <Flex alignItems={"center"} gap={2}>

                <Avatar src={post} alt={username} size={"sm"}/>

                <Flex fontSize={12} fontWeight={"bold"} gap={2}>

                    <h4>{username}</h4>

                    <Box color={"gray.500"}>• 10 minutes ago</Box>

                </Flex>

            </Flex>

            
            <Box
                cursor={"pointer"}
            >

                <Text 
                    fontSize={12} 
                    fontWeight={"bold"} 
                    color={"blue.500"}
                    _hover={{color: "white"}}
                    transition={"0.2s ease-in-out"}
                    onClick={() => setIsFollowed(!isFollowed)}
                >
                    
                    { isFollowed ? "Following" : "Follow" }

                </Text>

            </Box>

        </Flex>

    )

}

export default PostHeader