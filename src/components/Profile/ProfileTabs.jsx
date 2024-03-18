import { Flex, Box, Text } from '@chakra-ui/react'
import { BsGrid3X3, BsBookmark, BsSuitHeart } from'react-icons/bs'

const ProfileTabs = () =>{

    return(

        <Flex
            gap={{ base: 4, sm: 10 }}
            w={"full"}
            justifyContent={"center"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
        >

            <Flex 
                borderTop={"1px solid white"}
                alignItems={"center"}
                p={3}
                gap={1}
                cursor={"pointer"}
            >

                <Box fontSize={20}>

                    <BsGrid3X3/>

                </Box>


                <Text 
                    fontSize={12} 
                    display={{ base: "none", sm: "block" }}
                    p={3}
                    gap={1}
                    cursor={"pointer"}
                >Posts</Text>

            </Flex>



            <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>

                <Box fontSize={20}>

                    <BsBookmark/>

                </Box>


                <Text 
                    fontSize={12} 
                    display={{ base: "none", sm: "block" }}
                    p={3}
                    gap={1}
                    cursor={"pointer"}
                >Saved</Text>

            </Flex>



            <Flex alignItems={"center"} p={3} gap={1} cursor={"pointer"}>

                <Box fontSize={20}>

                    <BsSuitHeart fontWeight={"bold"}/>

                </Box>


                <Text 
                    fontSize={12} 
                    display={{ base: "none", sm: "block" }}
                    p={3}
                    gap={1}
                    cursor={"pointer"}
                >Likes</Text>

            </Flex>

        </Flex>

    )

}

export default ProfileTabs