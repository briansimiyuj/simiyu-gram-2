import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Flex, Box, Image, Avatar, Text, Divider, VStack, Button, Link } from "@chakra-ui/react"
import profilepic from "../../../img/profilepic.png"
import { MdDelete } from "react-icons/md"
import { Link as RouterLink } from "react-router-dom"
import Comments from "../Comments/Comments"
import PostFooter from "../FeedPosts/PostFooter"
import profileStore from "../../store/profileStore"
import { useAuthStore } from "../../store/authStore"
import { useDeletePost } from "../../hooks/useDeletePost"

const PostModal = ({ isOpen, onClose, img, post }) => {

    const userProfile = profileStore(state => state.userProfile),
          authUser = useAuthStore(state => state.user),
          { isDeleting, deleteUserPost } = useDeletePost()

    return(

        <>
        
            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                isCentered={true}
                size={{ base: "3xl", md: "5xl" }}
            >

                <ModalOverlay/>


                <ModalContent>
                    
                    <ModalCloseButton  mt={5}/>



                    <ModalBody bg={"black"} pb={5} pr={55}>

                        <Flex
                            gap={4} 
                            w={{ base: "90%", sm: "70%", md: "full" }}
                            mx={"auto"}
                            mt={5}
                            maxW={"90vw"}
                            maxH={"90vh"}
                        >

                            <Box
                                borderRadius={4}
                                overflow={"hidden"}
                                border={"1px solid"}
                                borderColor={"whiteAlpha.300"}
                                flex={1.5}
                            >

                                <Image src={img} alt="Profile post"/>

                            </Box>


                            <Flex 
                                flex={1}
                                flexDirection={"column"}
                                px={10}
                                display={{ base: "none", md: "block" }}
                            >

                                <Flex alignItems={"center"} justifyContent={"space-between"}>

                                <Link
                                    fontSize={14}
                                    fontWeight={700}
                                    as={RouterLink}
                                    display="flex"
                                    gap={3}
                                >
                                    
                                    <Avatar 
                                        src={userProfile?.profilePicURL} 
                                        alt={userProfile?.profilePicURL} 
                                        size={"sm"} 
                                        name={userProfile?.fullName}
                                    />

                                    <Text mt={1}>{userProfile?.username}</Text>
                                
                                </Link>


                                    {

                                        authUser?.userId === userProfile?.userId &&(

                                            <Button
                                                _hover={{bg: "whiteAlpha.300", color: "red.600"}}
                                                borderRadius={4}
                                                p={1}    
                                                h={8}
                                                bg="transparent"
                                                size={"sm"}
                                                isLoading={isDeleting}
                                                onClick={() => deleteUserPost(post)}
                                            >

                                                <MdDelete size={20} cursor={"pointer"}/>

                                            </Button>

                                        )

                                    }
                                    
                                </Flex>
                                    
                                    
                                <Divider my={4} bg={"gray.500"}/>


                                {

                                    post?.caption && (

                                        <Flex flexDirection="column" mb={25}>

                                            <Flex gap={4} mb={25}>


                                                <Link
                                                    fontSize={14}
                                                    fontWeight={700}
                                                    as={RouterLink}
                                                    display="flex"
                                                    gap={3}
                                                >
                                                    
                                                    <Avatar 
                                                        src={userProfile?.profilePicURL} 
                                                        alt={userProfile?.profilePicURL} 
                                                        size={"sm"} 
                                                        name={userProfile?.fullName}
                                                    />

                                                    <Text mt={1}>{userProfile?.username}</Text>
                                                
                                                </Link>


                                                <Box>

                                                    <Flex gap={5}>

                                                        <Text fontSize={12} mt={2} color={"gray"}>1 day ago</Text>

                                                    </Flex>

                                                    <Text 
                                                        fontSize={13} 
                                                        fontWeight="bold"
                                                        ml={-20}
                                                        pl={2}
                                                        mt={3}
                                                    >{post?.caption}</Text>

                                                </Box>       

                                            </Flex>

                                            <Divider my={2} bg={"gray.800"}/>


                                        </Flex>
                                        

                                    )

                                }


                                <VStack 
                                    alignItems={"start"}
                                    w={"full"}
                                    maxH={350}
                                    overflowY={"auto"}
                                >

                                    <Comments
                                        createdAt="1d ago"
                                        username="BrianSimiyu"
                                        profilePic={profilepic}
                                        text="Dummy images from unsplash"
                                    />

                                    <Comments
                                        createdAt="12h ago"
                                        username="abrahmov"
                                        profilePic="https://bit.ly/dan-abramov"
                                        text="Nice pic"
                                    />

                                    <Comments
                                        createdAt="3h ago"
                                        username="kentdodds"
                                        profilePic="https://bit.ly/kent-c-dodds"
                                        text="Good clone dude! clone dude! clone dude! clone dude! clone dude! clone dude! clone dude!"
                                    />

                                </VStack>

                                <PostFooter isProfilePage={true} marginTop={"10rem"}/>

                            </Flex>

                        </Flex>

                    </ModalBody>

                </ModalContent>

            </Modal>

        </>        

    )

}

export default PostModal