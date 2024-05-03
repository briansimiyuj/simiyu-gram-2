import { Avatar, Button, CloseButton, Flex, Text, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { useFollowUser } from "../../hooks/useFollowUser"

const SuggestedUserMobile = ({ user }) =>{

    const { isUpdating, isFollowingUser, handleFollowUser } = useFollowUser(user?.userId)

    const onFollowUser = async() =>{
    
        await handleFollowUser()
 
            setUser({ 
                
                ...user, 
                followers: isFollowingUser ? user.followers.filter(userId => userId !== authUser.userId) : [...user.followers, authUser.userId]
    
            })
     
    }

    return(

        <Link
            to={`/${user?.username}`}
            as={RouterLink}
        >
        
            <Flex 
                w={150} 
                border={"1px solid white"} 
                position="relative" 
                justifyContent={"center"}
                h={250}
                mt={5}
            >

                <CloseButton position={"absolute"} top={0} right={0}/>

                <Flex alignItems={"center"} justifyContent={"center"} flexDir={"column"} gap={5}>

                    <Avatar src={user?.profilePicURL} name={user?.fullname} size={"xl"} alt={`${user?.username}'s profile pic`}/>

                    <Text fontSize={18}>{user?.username}</Text>

                    <Button
                        fontSize={14}
                        bg={"blue.400"}
                        p={3}
                        fontWeight={"medium"}
                        color={"white"}
                        cursor={"pointer"}
                        _hover={{ color: "white" }}
                        onClick={onFollowUser}
                        isLoading={isUpdating}
                    >Follow</Button>

                </Flex>

            </Flex>
        
        </Link>

    )

}

export default SuggestedUserMobile