import { Flex } from '@chakra-ui/react'
import Home from './Home'
import Search from './Search'

const Menu = ({ column }) =>{

  return(

    <Flex direction={column} gap={5} cursor={"pointer"}>

      <Home/>

      <Search/>

    </Flex>

  )

}

export default Menu