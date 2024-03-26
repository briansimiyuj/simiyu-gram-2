import { Flex, Box, Avatar, Button } from '@chakra-ui/react'
import profile from '../../../img/profilepic.png'
import { useLogOut } from "../../hooks/useLogOut"

const SuggestedHeader = () =>{

    const { handleSignOut } = useLogOut()

    return(

        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>

            <Flex alignItems={"center"} gap={2}>

                <Avatar size={"lg"} src={profile} name="BrianBennett"/>

                <Box fontSize={12} fontWeight={"bold"}>BrianBen</Box>

            </Flex>


            <Button
                fontSize={14}
                fontWeight={"medium"}
                color={"blue.400"}
                border={"none"}
                bg={"transparent"}
                cursor={"pointer"}
                _hover={{ bg: "transparent" }}
                onClick={handleSignOut}
            >Sign out</Button>

        </Flex>

    )

}

export default SuggestedHeader