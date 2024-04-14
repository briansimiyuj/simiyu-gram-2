import { Flex } from '@chakra-ui/react'
import Home from './Home'

const Menu = ({ column }) =>{

  return(

    <Flex direction={column} gap={5} cursor={"pointer"}>

      <Home/>

    </Flex>

  )

}

export default Menu