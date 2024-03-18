import { Box, Flex, Link, Tooltip, Avatar } from '@chakra-ui/react'
import { AiFillHome } from'react-icons/ai'
import { CreatePostLogo, NotificationsLogo, SearchLogo } from '../../assets/constants'
import { Link as RouterLink } from'react-router-dom'

const Menu = ({ column }) =>{


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

        <Flex direction={column} gap={5} cursor={"pointer"}>

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

    )

}

export default Menu