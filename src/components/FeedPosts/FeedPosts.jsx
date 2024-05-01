import { Container, VStack, Flex, SkeletonCircle, Skeleton, Box, Text } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useGetFeedPosts } from '../../hooks/useGetFeedPosts'
import { useState } from 'react'

const FeedPosts = () =>{

   const { loading, posts } = useGetFeedPosts(),
         [isProfilePage, setIsProfilePage] = useState(false)


    return(

        <Container 
            maxW={"container.sm"} 
            py={10} 
            px={2}
        >

            {

                loading && [0, 1, 2].map(i =>(

                    <VStack key={i} gap={4} alignItems={"start"} mb={10}>

                        <Flex gap={2}>

                            <SkeletonCircle size="10"/>

                            
                            <VStack gap={2} alignItems={"start"}>

                                <Skeleton w={"200px"} h={"10px"}/>

                                <Skeleton w={"200px"} h={"10px"}/>

                            </VStack>

                        </Flex>


                        <Skeleton w={"full"}>

                            <Box h={"400px"}>Contents wrapped</Box>

                        </Skeleton>

                    </VStack>

                ))

            }

            {

                !loading && posts.length > 0 && posts.map(post =>(

                    <FeedPost key={post.postId} post={post} isProfilePage={isProfilePage}/>

                ))

            }

        { !loading && posts.length === 0 && <Text fontSize={{ base: "2xl", sm: "3xl"}} marginTop={"8rem"} fontWeight={"bold"}>Please follow users to make friends😃</Text> }
            
        </Container>

    )

}

export default FeedPosts