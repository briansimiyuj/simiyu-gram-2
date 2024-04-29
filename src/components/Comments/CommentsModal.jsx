import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useState } from "react"
import ModalComments from "./ModalComments"

const CommentsModal = ({ isOpen, onClose, post }) =>{

    const [commentModal, setCommentModal] = useState(true)

	return(

		<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>

			<ModalOverlay/>

			<ModalContent bg={"black"} border={"1px solid gray"} maxW={"600px"}>

				<ModalHeader>Comments</ModalHeader>


				<ModalCloseButton/>


				<ModalBody pb={6}>

					<Flex 
                        mb={4} 
                        alignItems={"center"} 
                        flexDir={"column"} 
                        maxH={"900px"} 
                        h={"auto"}
                        overflowY={"auto"}  
                        overflowX={"hidden"}
                    >

                        {

                            post?.comments?.map((comment, i) => <ModalComments key={i} comment={comment} commentModal={commentModal}/> )

                        }

                    </Flex>

					<form style={{ marginTop: "5rem" }}>

						<Input placeholder='Comment' size={"sm"}/>

						<Flex w={"full"} justifyContent={"flex-end"}>

							<Button type='submit' ml={"auto"} size={"sm"} my={4}>

								Post

							</Button>

						</Flex>

					</form>

				</ModalBody>

			</ModalContent>

		</Modal>

	)
}

export default CommentsModal