import { Flex, Box, useMediaQuery, Link, Divider } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import { auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import NavBar from '../components/NavBar/NavBar'
import PageLayoutSpinner from './PageLayoutSpinner'
import { useState } from 'react'
import { InstagramMobileLogo } from '../assets/constants'

const PageLayout = ({ children }) =>{

    const { pathname } = useLocation(),
          [user, loading] = useAuthState(auth),
          canRenderSidebar = pathname !== '/auth' && user,
          canRenderNavbar = !user && !loading && pathname !== '/auth',
          checkingUserIsAuthenticated = !user && loading,
          [isLessThan768] = useMediaQuery("(max-width: 768px)"),
          [menuDirection, setMenuDirection] = useState("")

    
    if(checkingUserIsAuthenticated) return <PageLayoutSpinner/>


    return(

        <Flex flexDir={ canRenderNavbar ? "column" : "row" } minH={"100vh"} position="relative">

            {

                !isLessThan768 &&(

                    canRenderSidebar ?(

                        <Box w={{base:"70px", md:"240px"}}>
    
                            <Sidebar/>
    
                        </Box>
    
                    ): null

                )

            }


            { canRenderNavbar ? <NavBar/> : null }


            


            <Box w={{base:"calc(100% - 70px)", md:"calc(100% - 240px)"}} flex={1} mx={"auto"}>

                {

                    isLessThan768 &&(

                        <>

                            <Link 
                                to="/"
                                as={RouterLink}
                                pl={2}
                                display="flex"
                                cursor={"pointer"}
                                justifyContent={"center"}
                                marginTop={5}
                                marginBottom={5}    
                            >

                                <Flex gap={5} alignItems={"center"}>

                                    <InstagramMobileLogo/>

                                    <h1 style={{fontSize:"25px", fontWeight: 700, fontStyle: "italic"}}>SimiyuGram</h1>

                                </Flex>

                            </Link>

                            <Divider color={"whiteAlpha.200"} mt={5}/>

                        </>

                    )

                }

                <Box mt={isLessThan768 ? -5 : 0}>{children}</Box>

            </Box>



            {

                isLessThan768 && canRenderSidebar &&(

                    <Box w="100%" h="10vh" position="fixed" bottom={0} left={0} bg="black" zIndex={1111}>

                        <Sidebar menuDirection={"row"} setMenuDirection={setMenuDirection} />

                    </Box>

                )

            }

        </Flex>

    )

}

export default PageLayout