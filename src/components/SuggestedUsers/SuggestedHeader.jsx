import { Flex, Text, Avatar, Button } from '@chakra-ui/react'
import { useLogOut } from "../../hooks/useLogOut"
import { useAuthStore } from '../../store/authStore'
import { Link } from 'react-router-dom'

const SuggestedHeader = () =>{

    const { handleSignOut } = useLogOut(),
          authUser = useAuthStore(state => state.user)  

    return(

        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>

            <Flex alignItems={"center"} gap={2}>

                <Link to={`${authUser.username}`}>

                    <Avatar size={"lg"} src={authUser.profilePicURL} name={authUser.username}/>


                </Link>

                <Text fontSize={12} fontWeight={"bold"}>{authUser.username}</Text>

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