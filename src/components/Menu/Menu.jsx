import { Flex } from '@chakra-ui/react'
import Home from './Home'
import Search from './Search'
import Notifications from './Notification'

const Menu = ({ column }) =>{

  return(

    <Flex direction={column} gap={5} cursor={"pointer"}>

      <Home/>

      <Search/>

      <Notifications/>

    </Flex>

  )

}

export default Menu