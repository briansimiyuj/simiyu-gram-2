import { GridItem, Flex } from '@chakra-ui/react'

const ProfilePost = ({ img }) =>{

    return(

        <GridItem
            cursor={"pointer"}
            borderRadius={4}
            overflow={"hidden"}
            border={"1px solid"}
            borderColor={"whiteAlpha.300"}
            position={"relative"}
            aspectRatio={1 / 1}
        >

            <Flex
                opacity={0}
                _hover={{ opacity: 1 }}
                position={"absolute"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg={"blackAlpha.700"}
                transition={"all 0.3s ease"}
                zIndex={1}
                justifyContent={"center"}
            >



            </Flex>

        </GridItem>

    )

}

export default ProfilePost