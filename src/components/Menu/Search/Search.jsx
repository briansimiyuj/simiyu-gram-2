import { Flex, Tooltip, Text, useDisclosure } from "@chakra-ui/react"
import { SearchLogo } from "../../../assets/constants"
import { useSearchUser } from "../../../hooks/useSearchUser"
import SearchModal from "./SearchModal"
import { useRef } from "react"

const Search = () =>{

    const { loading, searchUser, user, setUser } = useSearchUser(),
          { isOpen, onOpen, onClose } = useDisclosure(),
          searchRef = useRef(null)

    
    const handleSearchUser = async(e) =>{
    
       e.preventDefault()

       searchUser(searchRef.current.value)

    }



    return(

        <>
        
            <Tooltip
                hasArrow 
                label="Search"
                placement="right"
                openDelay={500}
                ml={1}
                display={{base: "block", md: "none"}}
            >

                <Flex
                    alignItems="center"
                    justifyContent={{ base: "center", md: "start" }}
                    p={2}
                    gap={4}
                    _hover={{bg: "whiteAlpha.400"}}
                    borderRadius={6}
                    w={{ base: 10, md: "full" }}
                    cursor="pointer"
                    onClick={onOpen}
                >

                    <SearchLogo/>

                    <Text display={{ base: "none", md: "block" }}>Search</Text>

                </Flex>

            </Tooltip>

            <SearchModal 
                user={user}
                setUser={setUser}
                isOpen={isOpen} 
                onClose={onClose} 
                loading={loading}
                searchRef={searchRef}
                handleSearchUser={handleSearchUser}
            />
        
        </>


    )

}

export default Search