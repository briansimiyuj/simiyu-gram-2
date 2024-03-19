import { Grid, VStack, Skeleton, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import ProfilePost from './ProfilePost'
import img2 from '../../../img/img2.png'
import img4 from '../../../img/img4.png'
import img3 from '../../../img/img3.png'
import img1 from '../../../img/img1.png'

const ProfilePosts = () =>{

    const [isLoading, setIsLoading] = useState(true)


    useEffect(() =>{
    
        setTimeout(() =>{

            setIsLoading(false)

        }, 2000)
    
    }, [])

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

                isLoading && [0, 1, 2, 3, 4, 5].map(i =>(

                    <VStack key={i} gap={4} alignItems={"start"} mb={10}>

                        <Skeleton w={"full"}>

                            <Box h={"500px"}>Contents wrapped</Box>

                        </Skeleton>

                    </VStack>

                ))

            }




            {

                !isLoading && (

                    <>
                    
                        <ProfilePost img={img1}/>

                        <ProfilePost img={img2}/>

                        <ProfilePost img={img3}/>

                        <ProfilePost img={img4}/>
                    
                    </>

                )

            }

        </Grid>

    )

}

export default ProfilePosts