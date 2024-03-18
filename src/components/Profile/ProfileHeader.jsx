import { Flex, AvatarGroup, Avatar, VStack, Text, Button } from '@chakra-ui/react'
import profilepic from '../../../img/profilepic.png'

const ProfileHeader = () =>{

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

                <Avatar src={profilepic} alt="Brian's profile pic" name="Brian"/>

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

                    <Text fontSize={{ base: "sm", md: "lg" }}>BrianSimiyu</Text>

                    <Flex gap={4} alignItems={"center"} justifyContent={"center"}>

                        <Button 
                            bg={"white"}
                            color={"black"}
                            _hover={{ bg: "whiteAlpha.800" }}
                            size={{ base: "xs", md: "sm" }}
                        >Edit Profile</Button>

                    </Flex>

                </Flex>

            </VStack>

        </Flex>

    )

}

export default ProfileHeader