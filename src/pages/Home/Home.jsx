import { Container, Flex, Box, useMediaQuery } from '@chakra-ui/react'
import FeedPosts from '../../components/FeedPosts/FeedPosts'
import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers'
import SuggestedUsersMobile from '../../components/SuggestedUsers/SuggestedUsersMobile'
 
const Home = () =>{

    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    return(

        <Container maxW={"container.lg"}>

            <Flex gap={20}>

                <Box flex={2} py={10}>
                    
                    <FeedPosts/>

                    {

                        !isLargerThan768 && <SuggestedUsersMobile/>

                    }
                    
                </Box>

                <Box 
                    flex={3} 
                    mr={20}
                    display={{ base: "none", lg: "block" }}
                    maxW={"300px"}
                ><SuggestedUsers/></Box>

            </Flex>

        </Container>

    )

}

export default Home