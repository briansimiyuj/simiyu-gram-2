import { Flex, Text, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { useGetSuggestedUsers } from "../../hooks/useGetSuggestedUsers"
import SuggestedUserMobile from "./SuggestedUserMobile"
import { useFollowUser } from "../../hooks/useFollowUser"

const SuggestedUsersMobile = ({ user }) =>{

    const { suggestedUsers } = useGetSuggestedUsers()

    return(

        <Flex w="full">

            <Flex  flexDir="column">

                <Flex justifyContent={"space-between"} alignItems={"center"}>
                    
                    <Text>Suggested Users</Text>

                    <Link 
                        fontSize={12} 
                        fontWeight={"bold"}
                        _hover={{ color: "gray.400" }} 
                        cursor={"pointer"}
                        color={"blue.400"}
                        as={RouterLink}
                        to="/suggestedusers"
                    >See All</Link>
                    
                </Flex>


                <Flex gap={4}>

                    { suggestedUsers.map(user => <SuggestedUserMobile key={user.userId} user={user} />) }

                </Flex>

            </Flex>

        </Flex>

    )

}

export default SuggestedUsersMobile