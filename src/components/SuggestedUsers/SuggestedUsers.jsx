import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useGetSuggestedUsers } from '../../hooks/useGetSuggestedUsers'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'
import SuggestedUsersSkeleton from './SuggestedUsersSkeleton'

const SuggestedUsers = () =>{

    const { loading, suggestedUsers } = useGetSuggestedUsers()

    if(loading){

        return(

            <VStack py={8} px={6} gap={4}>

                <SuggestedHeader/>

                <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>

                    <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested For You</Text>

                    <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>See All</Text>

                </Flex>

                {
                
                    [...Array(3)].map((_, i) => <SuggestedUsersSkeleton key={i} height="60px"/>)
                    
                }

            </VStack>

        )

    }

    return(

        <VStack py={8} px={6} gap={4}>

            <SuggestedHeader/>

            { 

                suggestedUsers.length > 0 && (

                    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>

                        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested For You</Text>

                        <Link 
                            fontSize={12} 
                            fontWeight={"bold"}
                            _hover={{ color: "gray.400" }} 
                            cursor={"pointer"}
                            as={RouterLink}
                            to="/suggestedusers"
                        >See All</Link>

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