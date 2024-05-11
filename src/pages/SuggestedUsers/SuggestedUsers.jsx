import { Flex, Text, VStack } from "@chakra-ui/react"
import { useGetSuggestedUsers } from "../../hooks/useGetSuggestedUsers"
import SuggestedUserTwo from "../../components/SuggestedUsers/SuggestedUserTwo"
import SuggestedUsersSkeleton from "../../components/SuggestedUsers/SuggestedUsersSkeleton"

const SuggestedUsers = () =>{

    const { suggestedUsers, loading } = useGetSuggestedUsers()

    if(loading) return <SuggestedUsersSkeleton/>

    return(

        <Flex mt={20} w={{ base: 330, md: 800 }} flexDir={"column"} gap={10} position="relative">

            <Text fontSize={16} fontWeight={"bold"} ml={{ base: 10, md: 350 }}>Suggested Users</Text>

            <VStack position="absolute" left={{ base: 130, md: 300 }} top={50}>

                { suggestedUsers.map(user => <SuggestedUserTwo key={user.userId} user={user}/>) } 

            </VStack>

        </Flex>

    )

}

export default SuggestedUsers