import { Grid, VStack, Skeleton, Box } from '@chakra-ui/react'
import ProfilePost from './ProfilePost'
import { useGetUserPosts } from '../../hooks/useGetUsersPosts'
import NoPostFound from './NoPostFound'
import FeedPost from '../FeedPosts/FeedPost'
import { useState } from 'react'


const ProfilePosts = ({ username }) =>{

    const { loading, posts } = useGetUserPosts(username),
          noPostsFound = !loading && !posts,
          [isProfilePage, setIsProfilePage] = useState(true)

    
    if(noPostsFound) return <NoPostFound/>

    return(

        <Grid
            templateColumns={{
                sm: "1fr",
                md: "repeat(3, 1fr)"
            }}
            gap={1}
            columnGap={1}
        >

            {

                loading && [0, 1, 2, 3, 4, 5].map(i =>(

                    <VStack key={i} gap={4} alignItems={"start"} mb={10}>

                        <Skeleton w={"full"}>

                            <Box h={"500px"}>Contents wrapped</Box>

                        </Skeleton>

                    </VStack>

                ))

            }




            {

                !loading && Array.isArray(posts) && (

                    <>
                    
                        {

                            posts.map(post => (

                                // <ProfilePost key={post.id} postImage={post.image} post={post}/>

                                <FeedPost key={post.id} postImage={post.image} post={post} isProfilePage={isProfilePage} />

                            ))

                        }
                    
                    </>

                )

            }

        </Grid>

    )

}

export default ProfilePosts