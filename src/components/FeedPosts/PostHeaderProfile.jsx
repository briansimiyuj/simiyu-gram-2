import { Flex, Box, Avatar, Text, Link, Button } from '@chakra-ui/react'
import { MdEdit, MdDelete } from 'react-icons/md'
import { Link as RouterLink } from 'react-router-dom'
import { timeAgo } from '../../utils/timeAgo'
import { useAuthStore } from '../../store/authStore'
import { useDeletePost } from '../../hooks/useDeletePost'


const PostHeaderProfile = ({ post, userProfile }) =>{

    const authUser = useAuthStore(state => state.user),
          { isDeleting, deleteUserPost } = useDeletePost()

    return(

        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>

            <Flex alignItems={"center"}  w={"full"} justifyContent={"space-between"}>


                <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                
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

                    <Box color={"gray.500"} mt={1.5}>{ timeAgo(post.createdAt) }</Box>

                </Flex>


                {

                    authUser?.userId === userProfile?.userId &&(


                        <Flex gap={2}>

                            <Button size="sm">

                                <MdEdit/>

                            </Button>
                            
                            
                            <Button size="sm" isLoading={isDeleting} onClick={() => deleteUserPost(post)}>

                                <MdDelete/>

                            </Button>

                        </Flex>

                    )

                }

            </Flex>           


        </Flex>

    )

}

export default PostHeaderProfile