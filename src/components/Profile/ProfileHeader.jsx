import { Flex, AvatarGroup, Avatar } from '@chakra-ui/react'
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

        </Flex>

    )

}

export default ProfileHeader