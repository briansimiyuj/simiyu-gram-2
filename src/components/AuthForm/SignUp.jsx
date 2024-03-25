import { Input, InputGroup, InputRightElement, Button, Alert, AlertIcon } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useSignUpWithEmail } from "../../hooks/useSignUpWithEmail"

const SignUp = () =>{

    const [inputs, setInputs] = useState({

        fullName: '',
        username: '',
        email: '',
        password: '',

    }),

        [showPassword, setShowPassword] = useState(false),
        { loading, signup, error } = useSignUpWithEmail()


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
            
            
            <Input 
                placeholder="@username"
                fontSize={14}
                type="text"
                value={inputs.username}
                size={"sm"}
                onChange={e => setInputs({...inputs, username: e.target.value})}
            />
            
            <Input 
                placeholder="Full Name"
                fontSize={14}
                type="text"
                value={inputs.fullName}
                size={"sm"}
                onChange={e => setInputs({...inputs, fullName: e.target.value})}
            />


            <InputGroup>
            
                <Input 
                    placeholder="Password"
                    fontSize={14}
                    type={showPassword ? "text" : "password"}
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
                onClick={() => signup(inputs)}
                isLoading={loading}
            >Sign Up</Button>
        
        </>

    )

}

export default SignUp