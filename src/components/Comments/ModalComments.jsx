import { Flex, Avatar, Text, VStack, Link } from '@chakra-ui/react'
import { useState } from 'react'
import { CommentLike, CommentUnlike} from '../..//assets/constants'
import { useGetUserProfileById } from '../../hooks/useGetUserProfileById'
import CommentsSkeleton from './CommentsSkeleton'
import { Link as RouterLink } from 'react-router-dom'
import { timeAgo } from '../../utils/timeAgo'

const ModalComments = ({ comment }) =>{

    const [liked, setLiked] = useState(false),
          [likes, setLikes] = useState(1000),
          { userProfile, loading } = useGetUserProfileById(comment.createdBy),
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
            ml={2} 
            maxH={100} 
            h={`${chars.length > 130 ? "auto" : "50px"}`} 
            position="relative"
        >

            <Link
                as={RouterLink}
                to={`/${userProfile.username}`}
                w={{base: 70, sm: 370}}
            >
                
                <Flex gap={3} alignItems={"center"}>
                    
                    <Avatar src={userProfile.profilePicURL} name={userProfile.fullname} alt={`${userProfile.username}'s profile pic`} size={"sm"}/>
            
                    <Text fontWeight={"bold"} fontSize={{ base: 11, sm: 15}}>{userProfile.username}</Text>

                </Flex>
            
            </Link>


            <Flex  
            
              w={"100%"} maxH={70} h={"auto"}>

                <Text fontSize={{  base: 11, sm: 16}} ml={{base: 4, sm: 1}} h={"auto"} textAlign={"left"} mt={1} w={"100%"}>{comment.comment}</Text>

            </Flex>
            
            <Flex direction={"column"} w={"17%"} alignItems="center" position="relative" mt={32}>

                <Flex justifyContent={"space-between"} mb={5}>                

                    <VStack 
                        onClick={handleLikeComment} 
                        cursor={"pointer"} 
                        ml={-7} 
                        mt={0}
                        position="absolute"
                        top={-120}
                    >

                        {

                            !liked? (<CommentLike />) : (<CommentUnlike/>)

                        }

                        <Text fontWeight={600} fontSize={"sm"} mt={-2}>2</Text>

                    </VStack>

                </Flex>

                <Text 
                    fontSize={{base: 11, sm: 12}} 
                    color={"gray"} 
                    mt={-4} 
                    mr={-15}
                    position="absolute"
                    top={-20}
                    left={{base: -350, sm: -450}}
                >

                    { timeAgo(comment.createdAt) }

                </Text>

            </Flex>

        </Flex>

    )

}

export default ModalComments