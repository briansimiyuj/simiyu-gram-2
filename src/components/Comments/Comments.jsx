import { Flex, Avatar, Text, VStack, Link } from '@chakra-ui/react'
import { useState } from 'react'
import { CommentLike, CommentUnlike} from '../..//assets/constants'
import { useGetUserProfileById } from '../../hooks/useGetUserProfileById'
import CommentsSkeleton from './CommentsSkeleton'
import { Link as RouterLink } from 'react-router-dom'
import { timeAgo } from '../../utils/timeAgo'

const Comments = ({ comment }) =>{

    const [liked, setLiked] = useState(false),
          [likes, setLikes] = useState(1000),
          { userProfile, loading } = useGetUserProfileById(comment.createdBy)

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

        <Flex gap={2} justifyContent={"center"} mt={6}>

            <Link
                as={RouterLink}
                to={`/${userProfile.username}`}
            >
                
                <Flex gap={3} alignItems={"center"}>
                    
                    <Avatar src={userProfile.profilePicURL} name={userProfile.fullname} alt={`${userProfile.username}'s profile pic`} size={"sm"}/>
            
                    <Text fontWeight={"bold"} fontSize={15}>{userProfile.username}</Text>

                </Flex>
            
            </Link>


            
            <Flex direction={"column"} w={"170%"} alignItems="center" position="relative">

                <Flex justifyContent={"space-between"} mb={5}>

                    <Flex ml={-6} w={300} mt={2}>

                        <Text fontSize={14}>{comment.comment}</Text>

                    </Flex>


                    <VStack onClick={handleLikeComment} cursor={"pointer"} ml={5}>

                        {

                            !liked? (<CommentLike />) : (<CommentUnlike/>)

                        }

                        <Text fontWeight={600} fontSize={"sm"} mt={-2}>2</Text>

                    </VStack>

                </Flex>

                <Text 
                    fontSize={12} 
                    color={"gray"} 
                    mt={-2} 
                    mr={-15}
                    position="absolute"
                    top={10}
                    left={-110.8}
                >

                    { timeAgo(comment.createdAt) }

                </Text>

            </Flex>

        </Flex>

    )

}

export default Comments