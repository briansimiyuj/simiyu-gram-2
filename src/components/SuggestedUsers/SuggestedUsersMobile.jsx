import { Flex, Text, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const SuggestedUsersMobile = () =>{

    return(

        <Flex w={{base: "full", md: "300px"}} flexDir="column">

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

        </Flex>

    )

}

export default SuggestedUsersMobile