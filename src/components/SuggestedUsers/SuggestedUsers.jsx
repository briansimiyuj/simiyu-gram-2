import { VStack, Flex, Text } from '@chakra-ui/react'

import SuggestedHeader from './SuggestedHeader'

const SuggestedUsers = () =>{

    return(

        <VStack py={8} px={6} gap={4}>

            <SuggestedHeader/>

            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>

                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested For You</Text>

                <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>See All</Text>

            </Flex>

        </VStack>

    )

}

export default SuggestedUsers