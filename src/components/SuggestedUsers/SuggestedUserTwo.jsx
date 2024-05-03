import { VStack, Flex, Avatar, Text, Button, Link, CloseButton } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useFollowUser } from '../../hooks/useFollowUser'
import { useAuthStore } from '../../store/authStore'
import { useState } from 'react'

const SuggestedUserTwo = ({ user, setUser, onClose }) =>{

    const { isUpdating, isFollowingUser, handleFollowUser } = useFollowUser(user?.userId),
          authUser = useAuthStore(state => state.user),
          [suggestedUser, setSuggestedUser] = useState(true)

    
    const onFollowUser = async() =>{
    
       await handleFollowUser()

        setUser({ 
            
            ...user, 
            followers: isFollowingUser ? user.followers.filter(userId => userId !== authUser.userId) : [...user.followers, authUser.userId]

        })
    
    }


    return(

        <>
        
            {
            
                suggestedUser &&(

                    <Flex 
                        mb={5}
                        justifyContent={"space-between"}    
                        w={"60%"}
                        alignItems={"center"} 
                        _hover={{ bg: "whiteAlpha.300" }}
                        paddingInline={2}
                    >

                        <Link 
                            to={`/${user?.username}`} 
                            as={RouterLink}
                            _hover={{textDecoration: "none"}}
                            onClick={onClose}
                        >

                            <Flex alignItems={"center"} gap={2}>

                                <Avatar size={"md"} src={user?.profilePicURL} name={user?.fullName}/>


                                <VStack spacing={2} alignItems={"start"}>

                                    <Text fontSize={14} fontWeight={"bold"}>{user?.username}</Text>

                                    <Text fontSize={12} color={"gray.500"}>{user?.followers.length} followers</Text>

                                </VStack>

                            </Flex>

                        </Link>

                        <Flex gap={2} alignItems={"center"}>

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

                            <CloseButton onClick={() => setSuggestedUser(false)}/>

                        </Flex>

                    </Flex>

                )

            }
        
        </>


    )

}

export default SuggestedUserTwo