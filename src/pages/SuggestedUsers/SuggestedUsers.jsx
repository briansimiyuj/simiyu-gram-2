import { Flex, Text, VStack } from "@chakra-ui/react"
import { useGetSuggestedUsers } from "../../hooks/useGetSuggestedUsers"
import SuggestedUserTwo from "../../components/SuggestedUsers/SuggestedUserTwo"

const SuggestedUsers = () =>{

    const { suggestedUsers } = useGetSuggestedUsers()

    return(

        <Flex ml={{ base: -59, sm: 40}} mt={20} w={800} flexDir={"column"} gap={10}>

            <Text fontSize={16} fontWeight={"bold"} ml={{ base: 120, md: 160 }}>Suggested Users</Text>

            <VStack>

                { suggestedUsers.map(user => <SuggestedUserTwo key={user.userId} user={user}/>) } 

            </VStack>

        </Flex>

    )

}

export default SuggestedUsers