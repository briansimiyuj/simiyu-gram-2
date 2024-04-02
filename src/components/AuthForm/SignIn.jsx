import { InputGroup, Input, InputRightElement, Button, Alert, AlertIcon } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { useSignInWithEmail } from "../../hooks/useSignInWithEmail"

const SignIn = () =>{

    const [inputs, setInputs] = useState({

            email: '',
            password: '',            

        }),

        [showPassword, setShowPassword] = useState(false),
        { signIn, loading, error } = useSignInWithEmail()

    return(

        <>
        
            <Input 
                placeholder="Email"
                fontSize={14}
                type="email"
                value={inputs.email}
                size={"sm"}
                onChange={e => setInputs({...inputs, email: e.target.value})}
            />


            <InputGroup>
            
                <Input 
                    placeholder="Password"
                    fontSize={14}
                    type="password"
                    value={inputs.password}
                    size={"sm"}
                    onChange={e => setInputs({...inputs, password: e.target.value})}
                />


                <InputRightElement>
                
                    <Button
                        size={"sm"}
                        variant={"ghost"}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <ViewIcon/> : <ViewOffIcon/>}

                    </Button>
                
                </InputRightElement>
            
            </InputGroup>



            {

                error && (

                    <Alert 
                        status="error"
                        fontSize={13}
                        p={2} 
                        borderRadius={4}
                    >

                        <AlertIcon fontSize={12}/>

                        {error.message}

                    </Alert>

                )

            }


            <Button
                w={"full"} 
                colorScheme="blue" 
                size={"sm"} 
                fontSize={14}
                isLoading={loading}
                onClick={() => signIn(inputs)}
            >Sign In</Button>
        
        </>

    )

}

export default SignIn