import { Flex, Box } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import { auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import NavBar from '../components/NavBar/NavBar'
import PageLayoutSpinner from './PageLayoutSpinner'

const PageLayout = ({ children }) =>{

    const { pathname } = useLocation(),
          [user, loading] = useAuthState(auth),
          canRenderSidebar = pathname !== '/auth' && user,
          canRenderNavbar = !user && !loading && pathname !== '/auth',
          checkingUserIsAuthenticated = !user && loading

    
    if(checkingUserIsAuthenticated) return <PageLayoutSpinner/>


    return(

        <Flex flexDir={ canRenderNavbar ? "column" : "row" }>

            {

                canRenderSidebar ?(

                    <Box w={{base:"70px", md:"240px"}}>

                        <Sidebar/>

                    </Box>

                ): null

            }


            { canRenderNavbar ? <NavBar/> : null }


            <Box w={{base:"calc(100% - 70px)", md:"calc(100% - 240px)"}} flex={1} mx={"auto"}>

                {children}

            </Box>

        </Flex>

    )

}

export default PageLayout