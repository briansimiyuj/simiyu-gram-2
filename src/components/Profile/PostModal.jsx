import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from "@chakra-ui/react"

const PostModal = () =>{

    const { isOpen, onOpen, onClose } = useDisclosure()

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

                    <ModalBody>

                        This is the modal body

                    </ModalBody>

                </ModalContent>

            </Modal>

        </>        

    )

}

export default PostModal