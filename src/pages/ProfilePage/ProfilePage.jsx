import { Container, Flex, useMediaQuery } from '@chakra-ui/react'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import ProfilePosts from '../../components/Profile/ProfilePosts'
import { useParams } from 'react-router-dom'
import { useGetUserProfile } from '../../hooks/useGetUserProfile'
import UserNotFound from '../../components/UserNotFound/UserNotFound'
import ProfileHeaderSkeleton from '../../components/Profile/ProfileHeaderSkeleton/ProfileHeaderSkeleton'
import ProfileHeaderMobile from '../../components/Profile/ProfileHeaderMobile'
import ProfileHeaderMobileSkeleton from '../../components/Profile/ProfileHeaderSkeleton/ProfileHeaderMobileSkeleton'
const ProfilePage = () =>{

    const { username } = useParams(),
          { loading, userProfile } = useGetUserProfile(username),
          userNotFound = !loading && !userProfile,
          [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    if(userNotFound) return <UserNotFound/>

    return(

        <Container maxW="container.lg" py={5}>

            <Flex
                py={10}
                px={4}
                pl={{ base: 4, md: 10 }}
                w={"full"}
                mx={"auto"}
                flexDirection={"column"}
            >

                { 
                
                    !loading && userProfile  && (

                        isLargerThan768 ? <ProfileHeader/> : <ProfileHeaderMobile/>

                    )
                
                }

                {
                
                    loading &&(

                        isLargerThan768 ? <ProfileHeaderSkeleton/> : <ProfileHeaderMobileSkeleton/>

                    )
                
                
                }

            </Flex>


            <Flex
                px={{ base: 2, sm: 4 }}
                maxW={"full"}
                mx={"auto"}
                borderTop={"1px solid"}
                borderColor={"whiteAlpha.300"}
                direction={"column"}
            >
                
                <ProfileTabs/>

                <ProfilePosts username={username}/>
            
            </Flex>

        </Container>

    )

}

export default ProfilePage