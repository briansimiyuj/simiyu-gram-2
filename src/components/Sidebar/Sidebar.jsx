import { Box, Flex, Link, Tooltip, Button, useMediaQuery } from '@chakra-ui/react'
import { BiLogOut } from'react-icons/bi'
import { Link as RouterLink } from 'react-router-dom'
import { InstagramMobileLogo } from '../../assets/constants'
import Menu from '../Menu/Menu'
import { useLogOut } from '../../hooks/useLogOut'

const Sidebar = ({ menuDirection, setMenuDirection }) => {

    const { handleSignOut, isSigningOut } = useLogOut(),
          [isLessThan768] = useMediaQuery("(max-width: 768px)")


    return(

        <Box
            height={"100vh"}
            borderRight={"1px solid"}
            borderColor={"whiteAlpha.300"}
            py={ isLessThan768 ? 3 : 8}
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

                


                <Menu  menuDirection={ isLessThan768 ? "row" : "column" } setMenuDirection={setMenuDirection}/>                


                <Tooltip
                    hasArrow
                    label={"Logout"}
                    placement="right"
                    ml={1}
                    openDelay={500}
                    display={{base: "block", md: "none"}}
                >

                    <Flex
                        alignItems={"center"}
                        gap={4}
                        _hover={{bg: "whiteAlpha.400"}} 
                        borderRadius={6}
                        p={2} 
                        w={{base: 10, md: "full"}}
                        mt={"auto"}
                        justifyContent={{base: "center", md: "start"}}
                    >

                        

                        <Flex
                            onClick={handleSignOut}
                            fontSize={14}
                            fontWeight={"medium"}
                            color={"blue.400"}
                            style={{ textDecoration: "none" }}
                            cursor={"pointer"}
                        >

                            <Flex alignItems={"center"} gap={2}>

                                <BiLogOut size={25}/>

                                <Button
                                    display={{base: "none", md: "block"}}
                                    variant={"ghost"}
                                    _hover={{bg: "transparent"}}
                                    isLoading={isSigningOut}
                                >Sign Out</Button>

                            </Flex>

                        </Flex>

                    </Flex>

                </Tooltip>

            </Flex>

        </Box>

    )


}

export default Sidebar