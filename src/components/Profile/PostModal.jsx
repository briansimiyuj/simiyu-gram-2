import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react"

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

                    <ModalBody>

                        This is the modal body

                    </ModalBody>

                </ModalContent>

            </Modal>

        </>        

    )

}

export default PostModal