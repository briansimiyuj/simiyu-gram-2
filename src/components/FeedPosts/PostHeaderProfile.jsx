import { Flex, Box, Avatar, Text, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { timeAgo } from '../../utils/timeAgo'


const PostHeaderProfile = ({ post, userProfile }) =>{

    return(

        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>

            <Flex alignItems={"center"} gap={2}>

                <Link
                    fontSize={14}
                    fontWeight={700}
                    as={RouterLink}
                    display="flex"
                    gap={3}
                    to={`/${userProfile?.username}`}
                >
                    
                    <Avatar 
                        src={userProfile?.profilePicURL} 
                        alt={userProfile?.profilePicURL} 
                        size={"sm"} 
                        name={userProfile?.fullName}
                    />

                    <Text mt={1}>{userProfile?.username}</Text>
                
                </Link>

                <Flex fontSize={12} fontWeight={"bold"} gap={2}>

                    <Box color={"gray.500"}>{ timeAgo(post.createdAt) }</Box>

                </Flex>

            </Flex>

        </Flex>

    )

}

export default PostHeaderProfile