import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex, Box, Image } from "@chakra-ui/react"

const PostModal = ({ isOpen, onClose }) => {

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

                    <ModalHeader>Modal Title</ModalHeader>
                    
                    <ModalCloseButton/>



                    <ModalBody bg={"black"} pb={5}>

                        <Flex
                            gap={4} 
                            w={{ base: "90%", sm: "70%", md: "full" }}
                            mx={"auto"}
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

                        </Flex>

                    </ModalBody>



                </ModalContent>

            </Modal>

        </>        

    )

}

export default PostModal