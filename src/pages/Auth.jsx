import { Flex, Container, Box, Image, VStack } from '@chakra-ui/react'
import auth from '../../img/auth.png'
import playstore from '../../img/playstore.png'
import microsoft from '../../img/microsoft.png'
import AuthForm from '../components/AuthForm'

const Auth = () =>{

    return(

        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>

            <Container maxW={"container.md"} padding={0}>

                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>

                    <Box display={{base:"none", md:"block"}}>

                        <Image src={auth} htmlHeight={650} alt="phone"/>

                    </Box>
                
                
                
                    <VStack spacing={4} align={"stretch"}>

                        <AuthForm/>

                        <Box textAlign={"center"}>Get The App</Box>


                        <Flex gap={5} justifyContent={"center"}>

                            <Image src={playstore} alt="playstore logo" h={10}/>
                            
                            <Image src={microsoft} alt="microsoft logo" h={10}/>

                        </Flex>

                    </VStack>

                </Flex>

            </Container>

        </Flex>

    )

}

export default Auth