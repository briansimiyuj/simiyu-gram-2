import { VStack, Flex, Text, Box, Link } from '@chakra-ui/react'

import SuggestedHeader from './SuggestedHeader'

const SuggestedUsers = () =>{

    return(

        <VStack py={8} px={6} gap={4}>

            <SuggestedHeader/>

            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>

                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested For You</Text>

                <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>See All</Text>

            </Flex>


            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>

                &copy; 2024 Built By{" "}

                <Link
                    href="https://github.com/briansimiyuj"
                    target="_blank"
                    color={"blue.500"}
                    fontSize={14}
                >Brian Simiyu</Link>

            </Box>

        </VStack>

    )

}

export default SuggestedUsers