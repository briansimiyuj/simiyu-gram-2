import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from "@chakra-ui/react"
import { BsFillImageFill } from "react-icons/bs"

const CreatePostModal = ({ isOpen, onClose }) =>{

    return(

        <Modal isOpen={isOpen} onClose={onClose} size="xl">

			<ModalOverlay/>

			<ModalContent bg={"black"} border="1px solid gray">

				<ModalHeader>Create Post</ModalHeader>

				<ModalCloseButton/>

				<ModalBody pb={6}>

					<Textarea placeholder="Post caption..."/>

					<Input type="file" hidden/>

					<BsFillImageFill
						style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
						size={16}
					/>

				</ModalBody>

				<ModalFooter>
					
					<Button mr={3}>Post</Button>

				</ModalFooter>

			</ModalContent>

		</Modal>

    )

}

export default CreatePostModal