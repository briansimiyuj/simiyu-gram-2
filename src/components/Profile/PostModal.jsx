import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Flex, Box, Image, Avatar, Text, Divider, VStack } from "@chakra-ui/react"
import profilepic from "../../../img/profilepic.png"
import { MdDelete } from "react-icons/md"

const PostModal = ({ isOpen, onClose, img }) => {

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

                                        <Avatar src={profilepic} alt="profile pic" size={"sm"} name="Brian Simiyu"/>

                                        <Text fontSize={12} fontWeight={"bold"}>Brian Simiyu</Text>

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

                            </Flex>

                        </Flex>

                    </ModalBody>

                </ModalContent>

            </Modal>

        </>        

    )

}

export default PostModal