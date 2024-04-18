import { Tooltip, Link, Avatar, Text } from "@chakra-ui/react"
import { useAuthStore } from "../../../store/authStore"
import { Link as RouterLink } from "react-router-dom"

const ProfileLink = () =>{

    const authUser = useAuthStore(state => state.user)

    return(

        <Tooltip
            hasArrow
            label="Profile"
            placement="right"
            openDelay={500}
            ml={1}
            display={{base: "block", md: "none"}}
        >

            <Link
                to={`/${authUser?.username}`}
                display="flex"
                as={RouterLink}
                alignItems="center"
                gap={4}
                p={2}
                justifyContent={{ base: "center", md: "start" }}
                _hover={{bg: "whiteAlpha.400"}}
                borderRadius={6}
                w={{ base: 10, md: "full" }}
                cursor="pointer"
            >

                <Avatar src={authUser?.profilePicURL} alt={`${authUser?.username}'s profile pic`} name={authUser?.username} size="sm"/>

                <Text display={{ base: "none", md: "block" }}>Profile</Text>

            </Link>

        </Tooltip>

    )

}

export default ProfileLink