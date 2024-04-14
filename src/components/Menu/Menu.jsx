import { Flex } from '@chakra-ui/react'
import Home from './Home'
import Search from './Search'
import Notifications from './Notification'
import CreatePost from './CreatePost'
import ProfileLink from './ProfileLink'

const Menu = ({ column }) =>{

  return(

    <Flex direction={column} gap={5} cursor={"pointer"}>

      <Home/>

      <Search/>

      <Notifications/>

      <CreatePost/>

      <ProfileLink/>

    </Flex>

  )

}

export default Menu