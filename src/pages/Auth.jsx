import { Flex, Container, Box, Image } from '@chakra-ui/react'
import auth from '../../img/auth.png';

const Auth = () =>{

    return(

        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>

            <Container maxW={"container.md"} padding={0}>

                <Box display={{base:"none", md:"block"}}>

                    <Image src={auth} htmlHeight={650} alt="phone"/>

                </Box>

            </Container>

        </Flex>

    )

}

export default Auth