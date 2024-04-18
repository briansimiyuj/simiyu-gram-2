import { Box, Flex, Tooltip, useDisclosure } from "@chakra-ui/react"
import { CreatePostLogo } from "../../../assets/constants"
import CreatePostModal from "./CreatePostModal"

const CreatePost = () =>{

    const { isOpen, onOpen, onClose } = useDisclosure()

	return(
		
        <>
        
            <Tooltip
                hasArrow
                label={"Create"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
            >

                <Flex
                    alignItems={"center"}
                    gap={4}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    onClick={onOpen}
                >

                    <CreatePostLogo />
                    
                    <Box display={{ base: "none", md: "block" }}>Create</Box>

                </Flex>

            </Tooltip> 


            <CreatePostModal isOpen={isOpen} onClose={onClose}/>      
        
        </>
	
	)
}

export default CreatePost