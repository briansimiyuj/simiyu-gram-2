import { Box, VStack, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import GoogleAuth from './GoogleAuth'

const AuthForm = () =>{

    const [isSignIn, setIsSignIn] = useState(true)
          


    return(

        <div className="auth-form">

            <Box border={"1px solid gray"} borderRadius={10} padding={5}>

                <VStack spacing={4}>

                    <h1 style={{fontSize:"60px", fontWeight: 900, fontStyle: "italic"}}>BrisGram</h1>

                    
                    {
                        
                        !isSignIn ? <SignIn/> : <SignUp/>

                    } 



                    <Flex 
                        alignItems={"center"} 
                        justifyContent={"center"}
                        my={4}
                        gap={1}
                        w={"full"}
                    >

                        <Box flex={2} h={1} bg={"gray.400"}/>

                        <Text mx={1} color={"white"}>OR</Text>

                        <Box flex={2} h={1} bg={"gray.400"}/>

                    </Flex>


                    <GoogleAuth prefix={isSignIn ? "Sign Up" : "Sign In"}/>

                </VStack>

            </Box>



            <Box border={"1px solid gray"} borderRadius={4} padding={5}>

                <Flex alignItems={"center"} justifyContent={"center"}>

                    <Box mx={2} fontSize={14}>

                        { isSignIn ? "Already have an account?" : "Don't have an account?" }

                    </Box>


                    <Box onClick={() => setIsSignIn(!isSignIn)} color={"blue.500"} cursor={"pointer"}>

                        {  isSignIn ? "Sign In" : "Sign Up" }

                    </Box>

                </Flex>

            </Box>

        </div>

    )

}

export default AuthForm