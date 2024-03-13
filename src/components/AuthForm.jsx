import { Box, VStack, Input, Button, Flex, Text, Image } from '@chakra-ui/react'
import { useState } from 'react'
import google from '../../img/google.png'

const AuthForm = () =>{

    const [isSignIn, setIsSignIn] = useState(true)

    return(

        <div className="auth-form">

            <Box border={"1px solid gray"} borderRadius={10} padding={5}>

                <VStack spacing={4}>

                    <h1 style={{fontSize:"60px", fontWeight: 900, fontStyle: "italic"}}>SimiyuGram</h1>


                    <Input 
                        placeholder="Email"
                        fontSize={14}
                        type="email"

                    />


                    <Input 
                        placeholder="Password"
                        fontSize={14}
                        type="password"
                    />


                    {
                        
                        !isSignIn ?(
                            
                            <Input 
                                placeholder="Confirm Password"
                                fontSize={14}
                                type="password"
                            />

                        ): null

                    } 

                    <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
                        
                        {isSignIn ? 'Sign In' : 'Sign up'}
                    
                    </Button>


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


                    <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>

                        <Image src={google} w={5} alt="Google Logo"/>                        

                        <Text mx={2} color={"blue.500"}>Sign in with Google</Text>

                    </Flex>

                </VStack>

            </Box>



            <Box border={"1px solid gray"} borderRadius={4} padding={5}>

                <Flex alignItems={"center"} justifyContent={"center"}>

                    <Box mx={2} fontSize={14}>

                        { isSignIn ? "Don't have an account?" : "Already have an account?" }

                    </Box>


                    <Box onClick={() => setIsSignIn(!isSignIn)} color={"blue.500"} cursor={"pointer"}>

                        {  isSignIn ? "Sign Up" : "Sign In" }

                    </Box>

                </Flex>

            </Box>

        </div>

    )

}

export default AuthForm