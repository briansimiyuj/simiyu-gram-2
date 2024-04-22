import { Flex, Avatar, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { CommentLike, CommentUnlike} from '../../assets/constants'

const Comments = ({ createdAt, text, username, profilePic }) =>{

    const [liked, setLiked] = useState(false),
          [likes, setLikes] = useState(1000)


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

        <Flex gap={4}>

            <Avatar src={profilePic} name={username} alt={username} size={"sm"}/>

            
            <Flex direction={"column"}>

                <Flex>

                    <Flex gap={2} w={300}>

                        <Text fontWeight={"bold"} fontSize={12}>{username}</Text>

                        <Text fontSize={14}>{text}</Text>

                    </Flex>


                    <VStack onClick={handleLikeComment} cursor={"pointer"} ml={5}>

                        {

                            !liked? (<CommentLike />) : (<CommentUnlike/>)

                        }

                        <Text fontWeight={600} fontSize={"sm"} mt={-2}>2</Text>

                    </VStack>

                </Flex>

                <Text fontSize={12} color={"gray"} mt={-3}>{createdAt}</Text>

            </Flex>

        </Flex>

    )

}

export default Comments