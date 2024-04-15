import { Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"

const SearchModal = ({ isOpen, onClose, loading }) =>{

    return(

        <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">

            <ModalOverlay/>

            <ModalContent bg="black" border="1px solid gray" maxW={400}>

                <ModalHeader>Search User</ModalHeader>

                <ModalCloseButton/>

                
                <ModalBody pb={6}>

                    <form>

                        <FormControl>
                            
                            <FormLabel>Username</FormLabel>

                            <Input type="text" placeholder="@username"/> {/* TODO: Add searchRef (ref={searchRef}) */}
                            
                        </FormControl>


                        <Flex w="full" justifyContent="end">

                            <Button type="submit" ml="auto" size="sm" isLoading={loading}>Search</Button>

                        </Flex>

                    </form>

                </ModalBody>

            </ModalContent>

        </Modal>

    )

}

export default SearchModal