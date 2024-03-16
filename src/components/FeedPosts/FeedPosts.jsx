import { Container, VStack, Flex, SkeletonCircle, Skeleton, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import FeedPost from './FeedPost'
import img2 from '../../../img/img2.png'
import img4 from '../../../img/img4.png'
import img3 from '../../../img/img3.png'
import img1 from '../../../img/img1.png'

const FeedPosts = () =>{

    const [isLoading, setIsLoading] = useState(true)


    useEffect(() =>{
    
        setTimeout(() =>{

            setIsLoading(false)

        }, 2000)
    
    }, [])


    return(

        <Container 
            maxW={"container.sm"} 
            py={10} 
            px={2}
        >

            {

                isLoading && [0, 1, 2, 3, 4].map(i =>(

                    <VStack key={i} gap={4} alignItems={"start"} mb={10}>

                        <Flex gap={2}>

                            <SkeletonCircle size="10"/>

                            
                            <VStack gap={2} alignItems={"start"}>

                                <Skeleton w={"200px"} h={"10px"}/>

                                <Skeleton w={"200px"} h={"10px"}/>

                            </VStack>

                        </Flex>


                        <Skeleton w={"full"}>

                            <Box h={"500px"}>Contents wrapped</Box>

                        </Skeleton>

                    </VStack>

                ))

            }

            {

                !isLoading && (

                    <>
                    
                        <FeedPost img={img1} username="ChrisKen" avatar={img1}/>
                
                        <FeedPost img={img2} username="BenPol" avatar={img2}/>

                        <FeedPost img={img3} username="LouisJohnson" avatar={img3}/>

                        <FeedPost img={img4} username="Jefferson" avatar={img4}/>
                    
                    </>

                )

            }
            
        </Container>

    )

}

export default FeedPosts