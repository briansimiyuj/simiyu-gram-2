import { Flex, Avatar, Text, VStack, Link, Box } from '@chakra-ui/react'
import { MdDelete } from 'react-icons/md'
import { useState } from 'react'
import { CommentLike, CommentUnlike} from '../..//assets/constants'
import { useGetUserProfileById } from '../../hooks/useGetUserProfileById'
import CommentsSkeleton from './CommentsSkeleton'
import { Link as RouterLink } from 'react-router-dom'
import { timeAgo } from '../../utils/timeAgo'
import { useAuthStore } from '../../store/authStore'

const Comments = ({ comment }) =>{

    const [liked, setLiked] = useState(false),
          [likes, setLikes] = useState(1000),
          { userProfile, loading } = useGetUserProfileById(comment.createdBy),
          authUser = useAuthStore(state => state.user),
          chars = Array.from(comment.comment)

    if(loading) return <CommentsSkeleton/>


    const handleLikeComment = () => {
    
        if(liked){

            setLiked(false)
            
            setLikes(likes - 1)

        }else{

            setLiked(true)

            setLikes(likes + 1)

        }
    
    }

    return(

        <Flex 
            gap={12} 
            justifyContent={"start"} 
            mb={4} 
            w={"full"}
            h={`${chars.length > 130 ? "auto" : "50px"}`}
            position="relative"
        >

            <Link
                as={RouterLink}
                to={`/${userProfile.username}`}
                w={70}
            >
                
                <Flex gap={3} alignItems={"center"}>
                    
                    <Avatar src={userProfile.profilePicURL} name={userProfile.fullname} alt={`${userProfile.username}'s profile pic`} size={"sm"}/>
            
                    <Text fontWeight={"bold"} fontSize={13}>{userProfile.username}</Text>

                </Flex>
            
            </Link>


            <Flex  
              w={"100%"} 
              maxH={70} 
              h={"auto"}
            >

                <Text fontSize={{  base: 11, sm: 16}} ml={9} h={"auto"} textAlign={"left"} mt={1} w={"100%"}>{comment.comment}</Text>

            </Flex>

            
            <Flex direction={"column"} w={"50%"} alignItems="center" position="relative">

                <Flex justifyContent={"space-between"} mb={5}>

                    {

                        userProfile?.userId !== authUser?.userId ?(

                            <VStack onClick={handleLikeComment} cursor={"pointer"} ml={5}>

                                {

                                    !liked? (<CommentLike />) : (<CommentUnlike/>)

                                }

                                <Text fontWeight={600} fontSize={"sm"} mt={-2}>2</Text>

                            </VStack>

                        ):(

                            <Box  cursor={"pointer"} ml={5} mt={1}>

                                <MdDelete size={20}/>

                            </Box>

                        )

                    }

                </Flex>

                <Text 
                    fontSize={12} 
                    color={"gray"} 
                    mt={-2} 
                    mr={-15}
                    position="absolute"
                    top={10}
                    left={-290.8}
                >

                    { timeAgo(comment.createdAt) }

                </Text>

            </Flex>

        </Flex>

    )

}

export default Comments