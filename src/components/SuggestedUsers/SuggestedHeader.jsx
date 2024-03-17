import { Flex, Box, Avatar, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom' 
import profile from '../../../img/profilepic.png'

const SuggestedHeader = () =>{

    return(

        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>

            <Flex alignItems={"center"} gap={2}>

                <Avatar size={"lg"} src={profile} name="BrianBennett"/>

                <Box fontSize={12} fontWeight={"bold"}>BrianBen</Box>

            </Flex>


            <Link
                as={RouterLink}
                to={"/auth"}
                fontSize={14}
                fontWeight={"medium"}
                color={"blue.400"}
                style={{ textDecoration: "none" }}
                cursor={"pointer"}
            >Logout</Link>

        </Flex>

    )

}

export default SuggestedHeader