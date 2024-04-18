import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import { useGetSuggestedUsers } from '../../hooks/useGetSuggestedUsers'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () =>{

    const { loading, suggestedUsers } = useGetSuggestedUsers()

    if(loading) return null //TODO

    return(

        <VStack py={8} px={6} gap={4}>

            <SuggestedHeader/>

            { 

                suggestedUsers.length > 0 && (

                    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>

                        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested For You</Text>

                        <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>See All</Text>

                    </Flex>

                )

            }


            { suggestedUsers.map(user => <SuggestedUser key={user.userId} user={user}/>) }            


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