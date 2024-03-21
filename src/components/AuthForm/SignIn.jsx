import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { useState } from "react"

const SignIn = () =>{

    const [inputs, setInputs] = useState({

            email: '',
            password: '',            

        }),

        [showPassword, setShowPassword] = useState(false)

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



            <Button
                w={"full"} 
                colorScheme="blue" 
                size={"sm"} 
                fontSize={14}
            >Sign In</Button>
        
        </>

    )

}

export default SignIn