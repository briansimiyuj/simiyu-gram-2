import { Container } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import img2 from '../../../img/img2.png'
import img4 from '../../../img/img4.png'
import img3 from '../../../img/img3.png'
import img1 from '../../../img/img1.png'

const FeedPosts = () =>{

    return(

        <Container 
            maxW={"container.sm"} 
            py={10} 
            px={2}
        >

            <FeedPost img={img1} username="ChrisKen" avatar={img1}/>
            
            <FeedPost img={img2} username="BenPol" avatar={img2}/>

            <FeedPost img={img3} username="LouisJohnson" avatar={img3}/>

            <FeedPost img={img4} username="Jefferson" avatar={img4}/>
            
        </Container>

    )

}

export default FeedPosts