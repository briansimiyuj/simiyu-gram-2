import { Flex, Box, Text, InputGroup, InputRightElement, Input, Button } from '@chakra-ui/react'
import { NotificationsLogo, UnlikeLogo, CommentLogo } from '../../assets/constants'
import { useRef, useState } from'react'
import { usePostComment } from '../../hooks/usePostComment'
import { useAuthStore } from '../../store/authStore'

const PostFooter = ({ username, isProfilePage, marginTop, post }) =>{

    const [liked, setLiked] = useState(false),
          [likes, setLikes] = useState(1000),
          { commenting, handlePostComment, userComment, setUserComment } = usePostComment(),
          authUser = useAuthStore(state => state.user),
          commentRef = useRef(null)


    const handleSubmitComment = async() =>{
    
       await handlePostComment(post.postId, userComment)

       setUserComment('')
    
    }


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
       
            {

                isProfilePage ?(
                    
                    <Box position="absolute" width={"100%"} bottom={0} mb={10} ml={-9}>
                    
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


                            <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>

                                <CommentLogo/>

                            </Box>

                        </Flex>


                        <Text fontWeight={600} fontSize={"sm"}>{likes} likes</Text>


                        {

                            !isProfilePage && (

                                <>
                                
                                    <Text fontSize='sm' fontWeight={700}>   

                                        {username}{" "}

                                        <Text as="span" fontWeight={400}>Feeling Good</Text>

                                        <Text fontSize='sm' color={"gray"}>View all 1,000 comments</Text>

                                    </Text>
                                
                                </>

                            )

                        }


                        
                        {
                        
                            authUser && (
                                
                                <Flex
                                    alignItems={"center"}
                                    gap={2} 
                                    justifyContent={"space-between"}
                                    w={"full"}
                                >

                                    <InputGroup>
                                    
                                        <Input 
                                            variant={"flushed"} 
                                            placeholder={"Add a comment..."} 
                                            fontSize={14}
                                            value={userComment}
                                            onChange={e => setUserComment(e.target.value)}
                                            ref={commentRef}
                                        />

                                        <InputRightElement>
                                        
                                            {

                                                !userComment ? (

                                                    <Button
                                                        fontSize={14}
                                                        color={"gray.500"}
                                                        fontWeight={600}
                                                        cursor={"not-allowed"}
                                                        _hover={{color: "white"}}
                                                        bg={"transparent"}
                                                        disabled
                                                    >Post</Button>

                                                ):(

                                                    <Button
                                                        fontSize={14}
                                                        color={"blue.500"}
                                                        fontWeight={600}
                                                        cursor={"pointer"}
                                                        _hover={{color: "white"}}
                                                        bg={"transparent"}
                                                        onClick={handleSubmitComment}
                                                        isLoading={commenting}
                                                    >Post</Button>

                                                )

                                            }
                                        
                                        </InputRightElement>
                                    
                                    </InputGroup>
                                    
                                </Flex>

                            )
                        
                        }
                    
                    </Box>
                    
                ):(

                    <Box marginTop={marginTop} mb={10}>
        
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


                            <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>

                                <CommentLogo/>

                            </Box>

                        </Flex>


                        <Text fontWeight={600} fontSize={"sm"}>{likes} likes</Text>


                        {

                            !isProfilePage && (

                                <>
                                
                                    <Text fontSize='sm' fontWeight={700}>   

                                        {username}{" "}

                                        <Text as="span" fontWeight={400}>Feeling Good</Text>

                                        <Text fontSize='sm' color={"gray"}>View all 1,000 comments</Text>

                                    </Text>
                                
                                </>

                            )

                        }


                        <Flex
                            alignItems={"center"}
                            gap={2} 
                            justifyContent={"space-between"}
                            w={"full"}
                        >

                            <InputGroup>
                            
                                <Input 
                                    variant={"flushed"} 
                                    placeholder={"Add a comment..."} 
                                    fontSize={14}
                                    value={userComment}
                                    onChange={e => setUserComment(e.target.value)}
                                    ref={commentRef}
                                />

                                <InputRightElement>
                                
                                    {

                                        !userComment ? (

                                            <Button
                                                fontSize={14}
                                                color={"gray.500"}
                                                fontWeight={600}
                                                cursor={"not-allowed"}
                                                _hover={{color: "white"}}
                                                bg={"transparent"}
                                                disabled
                                            >Post</Button>

                                        ):(

                                            <Button
                                                fontSize={14}
                                                color={"blue.500"}
                                                fontWeight={600}
                                                cursor={"pointer"}
                                                _hover={{color: "white"}}
                                                bg={"transparent"}
                                                onClick={handleSubmitComment}
                                                isLoading={commenting}
                                            >Post</Button>

                                        )

                                    }
                                
                                </InputRightElement>
                            
                            </InputGroup>
                            
                        </Flex>
                    
                    </Box>

                )

            }
       
       </> 

    )

}

export default PostFooter 