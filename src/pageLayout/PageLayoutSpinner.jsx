import { Flex, Spinner } from '@chakra-ui/react'

const PageLayoutSpinner = () =>{

    return(

        <Flex 
            justifyContent="center" 
            alignItems="center"
            h="100vh"
            flexDir={"column"}
        >

            <Spinner size="xl"/>

        </Flex>

    )

}

export default PageLayoutSpinner