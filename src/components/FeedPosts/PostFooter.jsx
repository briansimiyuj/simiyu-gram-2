import { Flex, Box } from '@chakra-ui/react'
import { NotificationsLogo, UnlikeLogo } from '../../assets/constants'
import { useState } from'react'

const PostFooter = () =>{

    const [liked, setLiked] = useState(false),
          [likes, setLikes] = useState(1000)

    return(

        <>
        
            <Flex
                alignItems={"center"}
                gap={4}
                w={"full"}
                pt={0}
                mb={2}
                mt={"auto"}
            >

                <Box>

                    {

                        !liked? (<NotificationsLogo/>) : (<UnlikeLogo/>)

                    }

                </Box>

            </Flex>
        
        </>

    )

}

export default PostFooter 