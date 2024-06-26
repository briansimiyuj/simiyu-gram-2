import { Flex } from '@chakra-ui/react'
import Home from './Home/Home'
import Search from './Search/Search'
import Notifications from './Notification/Notification'
import CreatePost from './CreatePost/CreatePost'
import ProfileLink from './ProfileLink/ProfileLink'

const Menu = ({ menuDirection }) =>{

  return(

    <Flex direction={menuDirection} justifyContent={{ base: "space-between" }} gap={5} cursor={"pointer"}>

      <Home/>

      <Search/>

      <Notifications/>

      <CreatePost/>

      <ProfileLink/>

    </Flex>

  )

}

export default Menu