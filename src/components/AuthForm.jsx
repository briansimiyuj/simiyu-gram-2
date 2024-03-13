import { Box, VStack, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'

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

                </VStack>

            </Box>

        </div>

    )

}

export default AuthForm