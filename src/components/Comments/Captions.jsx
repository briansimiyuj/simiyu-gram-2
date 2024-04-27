import { Avatar, Divider, Flex, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { timeAgo } from "../../utils/timeAgo"
import profileStore from "../../store/profileStore"

const Captions = ({ post }) =>{

    const userProfile = profileStore(state => state.userProfile)

    return(

        <Flex gap={2} justifyContent={"center"} minH={85} h={"auto"} overflow={"hidden"}>

            <Link
                as={RouterLink}
                to={`/${userProfile.username}`}
            >
                
                <Flex gap={3} alignItems={"center"}>
                    
                    <Avatar src={userProfile.profilePicURL} name={userProfile.fullname} alt={`${userProfile.username}'s profile pic`} size={"sm"}/>
            
                    <Text fontWeight={"bold"} fontSize={16}>{userProfile.username}</Text>

                </Flex>
            
            </Link>



            
            <Flex
                direction={"column"} 
                w={"170%"} 
                alignItems="start" 
                position="relative"
                top={2}
            >

                <Text fontSize={17}>{post.caption}</Text>

                <Text 
                    fontSize={12} 
                    color={"gray"} 
                    mt={-2} 
                    mr={-15}
                    position="absolute"
                    top={10}
                    left={-110.8}
                >

                    { timeAgo(post.createdAt) }

                </Text>

            </Flex>

        </Flex>

    )

}

export default Captions