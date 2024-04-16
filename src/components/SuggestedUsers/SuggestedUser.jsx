import { VStack, Flex, Avatar, Text, Button } from '@chakra-ui/react'
import { useFollowUser } from '../../hooks/useFollowUser'
import { useAuthStore } from '../../store/authStore'

const SuggestedUser = ({ user, setUser }) =>{

    const { isUpdating, isFollowingUser, handleFollowUser } = useFollowUser(user?.userId),
          authUser = useAuthStore(state => state.user)

    
    const onFollowUser = async() =>{
    
       await handleFollowUser()

        setUser({ 
            
            ...user, 
            followers: isFollowingUser ? user.followers.filter(userId => userId !== authUser.userId) : [...user.followers, authUser.userId]

        })
    
    }


    return(

        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>

            <Flex alignItems={"center"} gap={2}>

                <Avatar size={"md"} src={user?.profilePicURL} name={user?.fullName}/>


                <VStack spacing={2} alignItems={"start"}>

                    <Text fontSize={12} fontWeight={"bold"}>{user?.username}</Text>

                    <Text fontSize={11} color={"gray.500"}>{user?.followers.length} followers</Text>

                </VStack>

            </Flex>

            
            {

                authUser?.userId !== user?.userId && (

                    <Button
                        fontSize={13}
                        bg={"transparent"}
                        p={0}
                        h={"max-content"}
                        fontWeight={"medium"}
                        color={"blue.400"}
                        cursor={"pointer"}
                        _hover={{ color: "white" }}
                        onClick={onFollowUser}
                        isLoading={isUpdating}
                    >

                        {isFollowingUser ? "Unfollow" : "Follow"}

                    </Button>

                )

            } 

        </Flex>

    )

}

export default SuggestedUser