import { Button, CloseButton, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { BsFillImageFill } from "react-icons/bs"
import { usePreviewImage } from "../../../hooks/usePreviewImage"
import { useCreatePost } from "../../../hooks/useCreatePost"
import { useShowToast } from "../../../hooks/useShowToast"

const CreatePostModal = ({ isOpen, onClose, img, postCaption, isEditing }) =>{

	const [caption, setCaption] = useState(''),
		  imageRef = useRef(null),
		  showToast = useShowToast(),
		  { handleImageChange, selectedFile, setSelectedFile } = usePreviewImage(),
		  { loading, handleCreatePost } = useCreatePost()


	const handlePostCreation = async() =>{
	
	    try{
	   
		  await handleCreatePost(selectedFile, caption)

		  onClose()

		  setCaption('')

		  setSelectedFile(null)
	   
		}catch(error){
	   
		   showToast("Error", error.message, "error")
	   
		}
	
	}

    return(

        <Modal isOpen={isOpen} onClose={onClose} size="xl">

			<ModalOverlay/>

			<ModalContent bg={"black"} border="1px solid gray">

				<ModalHeader>Create Post</ModalHeader>

				<ModalCloseButton/>

				<ModalBody pb={6}>

					<Textarea placeholder="Post caption..." value={caption || postCaption} onChange={e => setCaption(e.target.value)}/>

					<Input type="file" hidden ref={imageRef} onChange={handleImageChange}/>

					<BsFillImageFill
						onClick={() => imageRef.current.click()}
						style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
						size={16}
					/>


					{

						selectedFile ?(

							<Flex
							   mt={5}
							   w={"full"}
							   justifyContent= "center"
							   position="relative"
							>

								<Image src={selectedFile} alt="Selected img"/>

								<CloseButton
									position="absolute"
									top={-10}
									right={2}
									onClick={() => setSelectedFile(null)}
								/>

							</Flex>

						): img &&(

							<Flex
							   mt={5}
							   w={"full"}
							   justifyContent= "center"
							   position="relative"
							>

								<Image src={img} alt="Selected img"/>

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
					
					<Button mr={3} onClick={handlePostCreation} isLoading={loading}>
						
						{isEditing ? "Update" : "Post"}

					</Button>

				</ModalFooter>

			</ModalContent>

		</Modal>

    )

}

export default CreatePostModal