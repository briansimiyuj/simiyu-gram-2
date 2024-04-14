import { Flex, Tooltip, Text } from "@chakra-ui/react"
import { SearchLogo } from "../../assets/constants"

const Search = () =>{

    return(

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
                w={{ base: "100%", md: "full" }}
                cursor="pointer"
            >

                <SearchLogo/>

                <Text display={{ base: "none", md: "block" }}>Search</Text>

            </Flex>

        </Tooltip>

    )

}

export default Search