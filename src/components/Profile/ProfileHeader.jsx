import { Flex, AvatarGroup, Avatar, VStack, Text, Button, Link, useDisclosure } from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { useAuthStore } from '../../store/authStore'
import { useState } from 'react'
import profileStore from '../../store/profileStore'
import { useFollowUser } from '../../hooks/useFollowUser'

const ProfileHeader = () =>{

    const { userProfile } = profileStore(),
          { isOpen, onOpen, onClose } = useDisclosure(),
          authUser = useAuthStore(state => state.user),
          ownProfileAndAuth = authUser && authUser.username === userProfile.username,
          anProfileAndAuth = authUser && authUser.username !== userProfile.username, 
          [isFollowing, setIsFollowing] = useState(false),
          { isUpdating, isFollowingUser, handleFollowUser } = useFollowUser(userProfile.userId)

    return(

        <Flex
            gap={{ base: 4, sm: 10 }}
            py={10}
            direction={{ base: "column", sm: "row" }}
        >

            <AvatarGroup
                size={{ base: "xl", md: "2xl" }}
                justifySelf={"center"}
                alignSelf={"start"}
                mx={"auto"}
            >

                <Avatar src={userProfile.profilePicURL} alt={`${userProfile.username}'s profile pic`} name={userProfile.username}/>

            </AvatarGroup>



            <VStack
                alignItems={"start"}
                gap={2}
                mx={"auto"}
                flex={1}
            >

                <Flex 
                    gap={4} 
                    direction={{base: "column", sm: "row"}}
                    justifyContent={{base: "center", sm: "start"}}
                    alignItems={"center"}
                    w={"full"}
                >

                    <Text fontSize={{ base: "sm", md: "lg" }}>{userProfile.username}</Text>

                    {

                        ownProfileAndAuth && (

                            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>

                                <Button 
                                    bg={"white"}
                                    color={"black"}
                                    _hover={{ bg: "whiteAlpha.800" }}
                                    cursor={"pointer"}
                                    size={{ base: "xs", md: "sm" }}
                                    onClick={onOpen}
                                >Edit Profile</Button>

                            </Flex>

                        )

                    }
                    
                    
                    {

                        anProfileAndAuth && (

                            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>

                                <Button 
                                    bg={ isFollowingUser? "#333" : "blue.400" }
                                    _hover={{ border: isFollowingUser ? "1px solid white" : "none" }}
                                    color={"white"}
                                    size={{ base: "xs", md: "sm" }}
                                    cursor={"pointer"}
                                    isLoading={isUpdating}
                                    onClick={() => {
                                        setIsFollowing(!isFollowing)
                                        handleFollowUser()
                                    }}
                                >{isFollowingUser ? "Following" : "Follow"}</Button>

                            </Flex>

                        )

                    }

                </Flex>



                <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>

                    <Text fontSize={{ base: "xs", md: "sm" }}>

                        <Text as="span" fontWeight={"bold"} mr={1}>{userProfile.photos.length}</Text>Posts

                    </Text>

                    
                    <Text fontSize={{ base: "xs", md: "sm" }}>

                        <Text as="span" fontWeight={"bold"} mr={1}>{userProfile.followers.length}</Text>Followers

                    </Text>


                    <Text fontSize={{ base: "xs", md: "sm" }}>

                        <Text as="span" fontWeight={"bold"} mr={1}>{userProfile.following.length}</Text>Following

                    </Text>

                </Flex>


                <Flex alignItems={"center"} gap={4}>

                    <Text fontSize={{ base: "xs", md: "sm" }} fontWeight={"bold"}>{userProfile.fullName}</Text>

                </Flex>


                <Text fontSize={{ base: "xs", md: "sm" }}>{userProfile.bio}</Text> 
                

                {

                    userProfile.website && (
                        
                        <Text fontSize={{ base: "xs", md: "sm" }} mt={19}>

                            <LinkIcon/>

                            <Link 
                                href={userProfile.website}
                                isExternal 
                                color={"blue.500"} 
                                ml={3}
                            >

                                {

                                    userProfile.website.replace(/https?:\/\//, "www.")

                                }

                            </Link>

                        </Text>

                    )

                }   

            </VStack>


            { isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/> }

        </Flex>

    )

}

export default ProfileHeader