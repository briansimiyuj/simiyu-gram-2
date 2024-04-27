import { Flex, Box, Avatar, Text, Link, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { timeAgo } from '../../utils/timeAgo'
import { useFollowUser } from '../../hooks/useFollowUser'

const PostHeader = ({ post, userProfile }) =>{

    const [isFollowed, setIsFollowed] = useState(false), 
          { isUpdating, isFollowingUser, handleFollowUser } = useFollowUser(post.createdBy)

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

            
            <Box
                cursor={"pointer"}
            >

                <Button 
                    fontSize={12} 
                    size={"xs"}
                    fontWeight={"bold"} 
                    color={"blue.500"}
                    bg={"transparent"}
                    _hover={{color: "white"}}
                    onFocus={{ outline: "none", bg: "transparent" }}
                    transition={"0.2s ease-in-out"}
                    isLoading={isUpdating}
                    onClick={() => {
                        handleFollowUser()
                    }}
                >Unfollow</Button>

            </Box>

        </Flex>

    )

}

export default PostHeader