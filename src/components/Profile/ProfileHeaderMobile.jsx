import { Flex, AvatarGroup, Avatar, VStack, Text, Button, Link, useDisclosure } from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { useAuthStore } from '../../store/authStore'
import { useState } from 'react'
import { useFollowUser } from '../../hooks/useFollowUser'
import profileStore from '../../store/profileStore'
import EditProfile from './EditProfile'
import { useLogOut } from '../../hooks/useLogOut'

const ProfileHeader = () =>{

    const { userProfile } = profileStore(),
          { isOpen, onOpen, onClose } = useDisclosure(),
          authUser = useAuthStore(state => state.user),
          ownProfileAndAuth = authUser && authUser.username === userProfile.username,
          anProfileAndAuth = authUser && authUser.username !== userProfile.username, 
          [isFollowing, setIsFollowing] = useState(false),
          { isUpdating, isFollowingUser, handleFollowUser } = useFollowUser(userProfile.userId),
          { handleSignOut, isSigningOut } = useLogOut()

    return(

        <Flex
            gap={{ base: 4, sm: 10 }}
            py={-5}
            direction="column"
        >

            <Flex gap={{ base: 6, sm: 10 }}>

                <AvatarGroup
                    size={{ base: "xl", md: "2xl" }}
                    justifySelf={"center"}
                    alignSelf={"start"}
                    mx={{ base: -3, sm: 4}}
                >

                    <Avatar src={userProfile?.profilePicURL} alt={`${userProfile?.username}'s profile pic`} name={userProfile?.username}/>

                </AvatarGroup>


                <Flex alignItems={"center"} gap={4} ml={2}>

                    <Text fontSize={{ base: "12px",  sm: "22px", md: "3md" }}>

                        <Text as="span" fontWeight={"bold"} ml={11}>

                            { userProfile?.posts?.length > 0 ? userProfile?.posts?.length : 0 }

                        </Text>
                        
                        <Text>Posts</Text>

                    </Text>

                    
                    <Text fontSize={{ base: "12px", sm: "22px", md: "sm" }}>

                        <Text as="span" fontWeight={"bold"} ml={6}>{userProfile?.followers.length}</Text>
                                                
                        <Text>Followers</Text>

                    </Text>


                    <Text fontSize={{ base: "12px", md: "sm", sm: "22px" }}>

                        <Text as="span" fontWeight={"bold"} ml={6}>{userProfile?.following.length}</Text>
                        
                        <Text>Following</Text>

                    </Text>

                </Flex>

            </Flex>



            <VStack
                alignItems={"start"}
                gap={2}
                flex={1}
            >

                <Flex 
                    gap={4} 
                    direction={{base: "column", sm: "row"}}
                    justifyContent={{base: "center", sm: "start"}}
                    alignItems={"start"}
                    w={"full"}
                >

                    <Text fontSize={{ base: "18px", md: "lg" }}>{userProfile?.username}</Text>
                    

                </Flex>



                <Flex alignItems={"center"} gap={4}>

                    <Text fontSize={{ base: "16px", md: "sm" }} fontWeight={"bold"}>{userProfile?.fullName}</Text>

                </Flex>


                <Text fontSize={{ base: "14px", md: "sm" }}>{userProfile?.bio}</Text> 
                

                {

                    userProfile?.website && (
                        
                        <Text fontSize={{ base: "16px", md: "sm" }} mt={19}>

                            <LinkIcon/>

                            <Link 
                                href={userProfile?.website}
                                isExternal 
                                color={"blue.500"} 
                                ml={3}
                            >

                                {

                                    userProfile?.website.replace(/https?:\/\//, "www.")

                                }

                            </Link>

                        </Text>

                    )

                }   



                {

                        ownProfileAndAuth && (

                            <Flex gap={4} alignItems={"center"} justifyContent={"center"} mt={6} mb={-5}>

                                <Button 
                                    bg={"white"}
                                    color={"black"}
                                    _hover={{ bg: "whiteAlpha.800" }}
                                    cursor={"pointer"}
                                    size={{ base: "md", md: "sm" }}
                                    mb={{ base: 4, sm: 0 }}
                                    onClick={onOpen}
                                >Edit Profile</Button>
                                
                                <Button 
                                    bg={"#222"}
                                    color={"white"}
                                    cursor={"pointer"}
                                    size={{ base: "md", md: "sm" }}
                                    mb={{ base: 4, sm: 0 }}
                                    isLoading={isSigningOut}
                                    onClick={handleSignOut}
                                >Sign Out</Button>

                            </Flex>

                        )

                    }
                    
                    
                    {

                        anProfileAndAuth && (

                            <Flex gap={4} alignItems={"center"} justifyContent={"center"} mt={6} mb={-5}>

                                <Button 
                                    bg={ isFollowingUser? "#333" : "blue.400" }
                                    _hover={{ border: isFollowingUser ? "1px solid white" : "none" }}
                                    color={"white"}
                                    size={{ base: "md", md: "sm" }}
                                    cursor={"pointer"}
                                    mb={{ base: 4, sm: 0 }}
                                    isLoading={isUpdating}
                                    onClick={() => {
                                        setIsFollowing(!isFollowing)
                                        handleFollowUser()
                                    }}
                                >{isFollowingUser ? "Following" : "Follow"}</Button>

                            </Flex>

                        )

                    }

            </VStack>


            { isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/> }

        </Flex>

    )

}

export default ProfileHeader