import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { BsFillImageFill } from "react-icons/bs"

const CreatePostModal = ({ isOpen, onClose }) =>{

	const [caption, setCaption] = useState(''),
		  imageRef = useRef(null)

    return(

        <Modal isOpen={isOpen} onClose={onClose} size="xl">

			<ModalOverlay/>

			<ModalContent bg={"black"} border="1px solid gray">

				<ModalHeader>Create Post</ModalHeader>

				<ModalCloseButton/>

				<ModalBody pb={6}>

					<Textarea placeholder="Post caption..." value={caption} onChange={e => setCaption(e.target.value)}/>

					<Input type="file" hidden ref={imageRef}/>

					<BsFillImageFill
						onClick={() => imageRef.current.click()}
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