import { Grid, GridItem, VStack, Skeleton, Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

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

        </Grid>

    )

}

export default ProfilePosts