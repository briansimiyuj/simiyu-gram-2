import { Box, Flex, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { InstagramMobileLogo } from '../../assets/constants'

const Sidebar = () =>{

    return(

        <Box
            height={"100vh"}
            borderRight={"1px solid"}
            borderColor={"whiteAlpha.300"}
            py={8}
            position={"sticky"}
            top={0}
            left={0}
            px={{base: 2, md: 4}}
        >

            <Flex 
                direction={"column"} 
                gap={10}
                width={"full"}
                height={"full"}
            >

                <Link 
                    to="/"
                    as={RouterLink}
                    pl={2}
                    display={{base: "none", md: "block"}}
                    cursor={"pointer"}
                >

                    <h1 style={{fontSize:"25px", fontWeight: 700, fontStyle: "italic"}}>SimiyuGram</h1>

                </Link>
                
                
                <Link 
                    to="/"
                    as={RouterLink}
                    display={{base: "block", md: "none"}}
                    p={2}
                    cursor={"pointer"}
                    borderRadius={6}
                    _hover={{bg: "whiteAlpha.200"}}
                    w={{base: 10}}
                >

                    <Flex justifyContent={"space-around"} alignItems={"center"}>

                        <InstagramMobileLogo/>
                        <h1 style={{fontSize:"20px", fontWeight: 700, fontStyle: "italic"}}>SimiyuGram</h1>

                    </Flex>

                </Link>

            </Flex>

        </Box>

    )

}

export default Sidebar