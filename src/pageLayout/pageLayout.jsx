import { Flex, Box } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const pageLayout = () =>{

    const { pathname } = useLocation()


    return(

        <Flex>

            {

                pathname !== '/auth' ?(

                    <Box w={{base:"70px", md:"240px"}}>

                        <Sidebar/>

                    </Box>

                ): null

            }

        </Flex>

    )

}

export default pageLayout