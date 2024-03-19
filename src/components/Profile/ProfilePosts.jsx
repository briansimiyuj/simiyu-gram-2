import { Grid, GridItem } from '@chakra-ui/react'

const ProfilePosts = () =>{

    

    return(

        <Grid
            templateColumns={{
                sm: "1fr",
                md: "repeat(3, 1fr)"
            }}
            gap={1}
            columnGap={1}
        >



        </Grid>

    )

}

export default ProfilePosts