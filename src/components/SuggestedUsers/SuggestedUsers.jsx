import { VStack, Flex, Text, Box, Link } from '@chakra-ui/react'

import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () =>{

    return(

        <VStack py={8} px={6} gap={4}>

            <SuggestedHeader/>

            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>

                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>Suggested For You</Text>

                <Text fontSize={12} fontWeight={"bold"} _hover={{ color: "gray.400" }} cursor={"pointer"}>See All</Text>

            </Flex>


            <SuggestedUser name="Rita Njeri" avatar="https://images.unsplash.com/photo-1593878024377-b38927fc7689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJMQUNLJTIwTEFEWXxlbnwwfHwwfHx8MA%3D%3D" followers={1245}/>     

            <SuggestedUser name="Victoria Muthoni" avatar="https://images.unsplash.com/photo-1633419798943-e6dddd7f5370?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEJMQUNLJTIwTEFEWXxlbnwwfHwwfHx8MA%3D%3D" followers={134}/>       

            <SuggestedUser name="John Evans" avatar="https://images.unsplash.com/photo-1532136672867-8eff8c949b63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEJMQUNLJTIwZ3V5fGVufDB8fDB8fHww" followers={700}/>       



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