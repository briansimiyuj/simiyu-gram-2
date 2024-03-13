import { Box, Flex, Link,  Avatar, Tooltip } from '@chakra-ui/react'
import { AiFillHome } from'react-icons/ai'
import { Link as RouterLink } from 'react-router-dom'
import { CreatePostLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/constants'

const Sidebar = () =>{

    const sidebarItems =[

        {
          icon: <AiFillHome size={25}/>,
          text: "Home",
          link: "/",
        },
    
        {
          icon: <SearchLogo/>,
          text: "Search",
        },
    
        {
          icon: <NotificationsLogo/>,
          text: "Notifications",
        },
    
        {
          icon: <CreatePostLogo/>,
          text: "Create",
        },
    
        {
          icon: <Avatar size={"sm"} name='Burak Orkmez' src='/profilepic.png' />,
          text: "Profile",
          link: "/asaprogrammer",
        }
    ]      


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

                    </Flex>

                </Link>


                <Flex direction={"column"} gap={5} cursor={"pointer"}>

                    {

                        sidebarItems.map((item, index) => (

                            <Tooltip
                                hasArrow 
                                label={item.text}
                                placement="right"
                                key={index}
                                openDelay={500}
                                ml={1}
                                display={{base: "block", md: "none"}}
                            >

                                <Link
                                    to={item.link || null}
                                    display={"flex"}
                                    as={RouterLink}
                                    alignItems={"center"}
                                    gap={4}
                                    _hover={{bg: "whiteAlpha.400"}}
                                    borderRadius={6}
                                    p={2} 
                                    w={{base: 10, md: "full"}}
                                >

                                    {item.icon}

                                    <Box display={{base: "none", md: "block"}}>{item.text}</Box>
                                
                                </Link>

                            </Tooltip>

                        ))

                    }

                </Flex>

            </Flex>

        </Box>

    )


}

export default Sidebar