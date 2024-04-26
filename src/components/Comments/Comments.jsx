import { Flex, Avatar, Text, VStack } from '@chakra-ui/react'
import profilePic from '../../../img/profilepic.png'
import { useState } from 'react'
import { CommentLike, CommentUnlike} from '../..//assets/constants'
import { useGetUserProfileById } from '../../hooks/useGetUserProfileById'
import CommentsSkeleton from './CommentsSkeleton'

const Comments = ({ comment }) =>{

    const [liked, setLiked] = useState(false),
          [likes, setLikes] = useState(1000),
          { userProfile, loading, setUserProfile } = useGetUserProfileById(comment.createdBy)

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

        <Flex gap={2} justifyContent={"center"}>

            <Avatar src={profilePic} size={"sm"}/>

            
            <Flex direction={"column"} w={"170%"} alignItems="center">

                <Flex justifyContent={"space-between"}>

                    <Flex gap={2} w={300}>

                        <Text fontWeight={"bold"} fontSize={12}>briansimiyuj</Text>

                        <Text fontSize={14}>{comment.comment}</Text>

                    </Flex>


                    <VStack onClick={handleLikeComment} cursor={"pointer"} ml={5}>

                        {

                            !liked? (<CommentLike />) : (<CommentUnlike/>)

                        }

                        <Text fontWeight={600} fontSize={"sm"} mt={-2}>2</Text>

                    </VStack>

                </Flex>

                {/* <Text fontSize={12} color={"gray"} mt={-3}>{createdAt}</Text> */}

            </Flex>

        </Flex>

    )

}

export default Comments