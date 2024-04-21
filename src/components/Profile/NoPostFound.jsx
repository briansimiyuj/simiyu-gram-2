import { Flex, Text } from "@chakra-ui/react"

const NoPostFound = () =>{

    return(

        <Flex flexDir="column" textAlign="center" mx="auto" mt={10}>

            <Text fontSize="2xl" fontWeight={700}>No Posts Found</Text>

        </Flex>        

    )

}

export default NoPostFound