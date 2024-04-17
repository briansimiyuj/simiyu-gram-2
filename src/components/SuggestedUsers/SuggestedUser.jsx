import { VStack, Flex, Avatar, Text, Button, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useFollowUser } from '../../hooks/useFollowUser'
import { useAuthStore } from '../../store/authStore'

const SuggestedUser = ({ user, setUser, onClose }) =>{

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

        <Flex 
            justifyContent={"space-between"} 
            alignItems={"center"} 
            w={"full"} 
            _hover={{ bg: "whiteAlpha.300" }}
            paddingInline={2}
        >

            <Link 
                to={`${user?.username}`} 
                as={RouterLink}
                _hover={{textDecoration: "none"}}
                onClick={onClose}
            >

                <Flex alignItems={"center"} gap={2}>

                    <Avatar size={"md"} src={user?.profilePicURL} name={user?.fullName}/>


                    <VStack spacing={2} alignItems={"start"}>

                        <Text fontSize={12} fontWeight={"bold"}>{user?.username}</Text>

                        <Text fontSize={11} color={"gray.500"}>{user?.followers.length} followers</Text>

                    </VStack>

                </Flex>

            </Link>

            
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