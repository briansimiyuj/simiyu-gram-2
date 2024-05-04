import { Flex, Text, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { useGetSuggestedUsers } from "../../hooks/useGetSuggestedUsers"
import SuggestedUserMobile from "./SuggestedUserMobile"

const SuggestedUsersMobile = ({ user }) =>{

    const { suggestedUsers } = useGetSuggestedUsers(),
    shuffledUsers = suggestedUsers.sort(() => Math.random() - 0.5)



    return(

        <Flex  overflowX="hidden" w={325}>

            <Flex  flexDir="column">

                <Flex 
                    justifyContent={"space-between"} 
                    alignItems={"center"}
                    flexWrap={"wrap"}
                    w={325}
                >
                    
                    <Text flex={"1 0 auto"}>Suggested Users</Text>

                    <Link 
                        fontSize={12} 
                        fontWeight={"bold"}
                        _hover={{ color: "gray.400" }} 
                        cursor={"pointer"}
                        color={"blue.400"}
                        as={RouterLink}
                        to="/suggestedusers"
                        flex={"0 0 auto"}
                    >See All</Link>
                    
                </Flex>


                <Flex gap={4}>

                    {

                        shuffledUsers.map(user =>(

                            <SuggestedUserMobile key={user.userId} user={user}/>

                        ))

                    }                    

                </Flex>

            </Flex>

        </Flex>

    )

}

export default SuggestedUsersMobile