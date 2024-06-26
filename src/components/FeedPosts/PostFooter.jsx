import { Flex, Box, Text, InputGroup, InputRightElement, Input, Button, useDisclosure } from '@chakra-ui/react'
import { NotificationsLogo, UnlikeLogo, CommentLogo } from '../../assets/constants'
import { useRef, useState } from'react'
import { usePostComment } from '../../hooks/usePostComment'
import { useAuthStore } from '../../store/authStore'
import { useLikePosts } from '../../hooks/useLikePosts'
import { timeAgo } from '../../utils/timeAgo'
import CommentsModal from '../Comments/CommentsModal'

const PostFooter = ({ userProfile, isProfilePage, marginTop, post }) =>{

    const { liked, likes, handleLikePost, updating } = useLikePosts(post),
          { commenting, handlePostComment, userComment, setUserComment } = usePostComment(),
          authUser = useAuthStore(state => state.user),
          commentRef = useRef(null),
          { isOpen, onOpen, onClose } = useDisclosure()


    const handleSubmitComment = async() =>{
    
       await handlePostComment(post.postId, userComment)

       setUserComment('')
    
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

                            isProfilePage && <Text fontSize={12} color={"gray.500"}>Posted {timeAgo(post.createdAt)}</Text>

                        }

                        {

                            !isProfilePage && (

                                <>
                                
                                    <Text fontSize='sm' fontWeight={700}>   

                                        {userProfile?.username}{" "}

                                        { post.caption && <Text as="span" fontWeight={400}>{post.caption}</Text> }

                                        {
                                        
                                            post.comments.length > 0 && 
                                        
                                            <Text fontSize='sm' color={"gray"} onClick={onOpen} cursor={"pointer"}>See all {post.comments.length} comments</Text> 
                                        
                                        }

                                    </Text>

                                    { isOpen && <CommentsModal isOpen={isOpen} onClose={onClose} post={post}/>  }
                                
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

                                        {userProfile?.username}{" "}

                                        { post.caption && <Text as="span" fontWeight={400}>{post.caption}</Text> }

                                        {
                                        
                                            post.comments.length > 0 && 
                                        
                                            <Text fontSize='sm' color={"gray"} onClick={onOpen} cursor={"pointer"}>See all {post.comments.length} comments</Text> 
                                        
                                        }

                                    </Text>


                                    { isOpen && <CommentsModal isOpen={isOpen} onClose={onClose} post={post}/>  }
                                
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