import { Flex, Text, VStack } from "@chakra-ui/react"
import { useGetSuggestedUsers } from "../../hooks/useGetSuggestedUsers"
import SuggestedUserTwo from "../../components/SuggestedUsers/SuggestedUserTwo"

const SuggestedUsers = () =>{

    const { suggestedUsers } = useGetSuggestedUsers()

    return(

        <Flex ml={40} mt={20} w={800} flexDir={"column"} gap={10}>

            <Text>Suggested Users</Text>

            <VStack>

                { suggestedUsers.map(user => <SuggestedUserTwo key={user.userId} user={user}/>) } 

            </VStack>

        </Flex>

    )

}

export default SuggestedUsers