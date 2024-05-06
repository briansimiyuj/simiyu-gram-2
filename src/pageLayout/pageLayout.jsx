import { Flex, Box, useMediaQuery } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import { auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import NavBar from '../components/NavBar/NavBar'
import PageLayoutSpinner from './PageLayoutSpinner'
import { useState } from 'react'

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

        <Flex flexDir={ canRenderNavbar ? "column" : "row" }>

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

                {children}

            </Box>



            {

                isLessThan768 &&(

                    <Box w="100%" h="10vh" position="fixed" top={0} left={0} bg='red' zIndex={1111}>

                        <Sidebar menuDirection={"row"} setMenuDirection={setMenuDirection} />

                    </Box>

                )

            }

        </Flex>

    )

}

export default PageLayout