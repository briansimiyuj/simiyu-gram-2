import { Flex, Image, Text } from '@chakra-ui/react'
import google from '../../../img/google.png'

const GoogleAuth = ({ prefix }) =>{

    return(

        <>
        
            <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>

                <Image src={google} w={5} alt="Google Logo"/>                        

                <Text mx={2} color={"blue.500"}>{prefix} with Google</Text>

            </Flex>
        
        </>

    )

}

export default GoogleAuth