import { Flex, Box } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import { auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'

const PageLayout = ({ children }) =>{

    const { pathname } = useLocation(),
          [user, loading, error] = useAuthState(auth),
          canRenderSidebar = pathname !== '/auth' && user


    return(

        <Flex>

            {

                canRenderSidebar ?(

                    <Box w={{base:"70px", md:"240px"}}>

                        <Sidebar/>

                    </Box>

                ): null

            }


            <Box w={{base:"calc(100% - 70px)", md:"calc(100% - 240px)"}}>

                {children}

            </Box>

        </Flex>

    )

}

export default PageLayout