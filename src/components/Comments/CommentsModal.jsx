import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import ModalComments from "./ModalComments"
import { usePostComment } from "../../hooks/usePostComment"

const CommentsModal = ({ isOpen, onClose, post }) =>{

    const [commentModal, setCommentModal] = useState(true),
		  { handlePostComment, commenting, userComment, setUserComment } = usePostComment(),
		  commentsContainerRef = useRef(null)


	useEffect(() =>{
	
		const scrollToBottom = () =>{

			commentsContainerRef.current.scrollTop = commentsContainerRef.current.scrollHeight

		}

		if(isOpen) setTimeout(scrollToBottom, 100)
	
	}, [isOpen, post?.comments.length])

	const handleSubmitComment = async() =>{

		await handlePostComment(post.postId, userComment)

		setUserComment('')
	
	}
	

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
						ref={commentsContainerRef}
                    >

                        {

                            post?.comments?.map((comment, i) => <ModalComments key={i} comment={comment} commentModal={commentModal}/> )

                        }

                    </Flex>

					<form style={{ marginTop: "5rem" }}>

						<Input placeholder="Comment" size={"sm"} value={userComment} onChange={e => setUserComment(e.target.value)}/>

						<Flex w={"full"} justifyContent={"flex-end"}>

							<Button 
								type="submit"
								ml={"auto"} 
								size={"sm"} 
								my={4}
								isLoading={commenting}
								onClick={handleSubmitComment}
							>Post</Button>

						</Flex>

					</form>

				</ModalBody>

			</ModalContent>

		</Modal>

	)
}

export default CommentsModal