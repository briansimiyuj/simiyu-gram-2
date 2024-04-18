import { Box, Button, CloseButton, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { BsFillImageFill } from "react-icons/bs"
import { usePreviewImage } from "../../../hooks/usePreviewImage"

const CreatePostModal = ({ isOpen, onClose }) =>{

	const [caption, setCaption] = useState(''),
		  imageRef = useRef(null),
		  {handleImageChange, selectedFile, setSelectedFile} = usePreviewImage()

    return(

        <Modal isOpen={isOpen} onClose={onClose} size="xl">

			<ModalOverlay/>

			<ModalContent bg={"black"} border="1px solid gray">

				<ModalHeader>Create Post</ModalHeader>

				<ModalCloseButton/>

				<ModalBody pb={6}>

					<Textarea placeholder="Post caption..." value={caption} onChange={e => setCaption(e.target.value)}/>

					<Input type="file" hidden ref={imageRef} onChange={handleImageChange}/>

					<BsFillImageFill
						onClick={() => imageRef.current.click()}
						style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
						size={16}
					/>


					{

						selectedFile && (

							<Flex
							   mt={5}
							   w={"full"}
							   justifyContent= "center"
							   position="relative"
							   bg={"red"}
							>

								<Image src={selectedFile} alt="Selected img"/>

								<CloseButton
									position="absolute"
									top={-10}
									right={2}
									onClick={() => setSelectedFile(null)}
								/>

							</Flex>

						)

					}

				</ModalBody>

				<ModalFooter>
					
					<Button mr={3}>Post</Button>

				</ModalFooter>

			</ModalContent>

		</Modal>

    )

}

export default CreatePostModal