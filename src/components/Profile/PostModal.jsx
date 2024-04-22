import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Flex, Box, Image, Avatar, Text, Divider, VStack } from "@chakra-ui/react"
import profilepic from "../../../img/profilepic.png"
import { MdDelete } from "react-icons/md"
import Comments from "../Comments/Comments"
import PostFooter from "../FeedPosts/PostFooter"
import profileStore from "../../store/profileStore"

const PostModal = ({ isOpen, onClose, img }) => {

    const userProfile = profileStore(state => state.userProfile)

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

                                    <Flex gap={4}>

                                        <Avatar 
                                            src={userProfile?.profilePicURL} 
                                            alt={userProfile?.profilePicURL} 
                                            size={"sm"} 
                                            name={userProfile?.fullName}
                                        />

                                        <Text fontSize={12} fontWeight={"bold"} mt={2}>{userProfile?.username}</Text>

                                    </Flex>


                                    <Box 
                                        _hover={{bg: "whiteAlpha.300", color: "red.600"}}
                                        borderRadius={4}
                                        p={1}    
                                        h={8}
                                    >

                                        <MdDelete size={20} cursor={"pointer"}/>

                                    </Box>
                                    
                                </Flex>
                                    
                                    
                                <Divider my={4} bg={"gray.500"}/>


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


                            <Divider my={4} bg={"gray.800"}/>


                            <PostFooter isProfilePage={true} marginTop={"17rem"}/>

                            </Flex>

                        </Flex>

                    </ModalBody>

                </ModalContent>

            </Modal>

        </>        

    )

}

export default PostModal