import { Flex, Tooltip, Text } from "@chakra-ui/react"
import { NotificationsLogo } from "../../../assets/constants"

const Notifications = () =>{

    return(

        <Tooltip
            hasArrow 
            label="Notifications"
            placement="right"
            openDelay={500}
            ml={1}
            display={{base: "block", md: "none"}}
        >

            <Flex
                alignItems="center"
                justifyContent={{ base: "center", md: "start" }}
                p={2}
                gap={4}
                _hover={{bg: "whiteAlpha.400"}}
                borderRadius={6}
                w={{ base: 10, md: "full" }}
                cursor="pointer"
            >

                <NotificationsLogo/>

                <Text display={{ base: "none", md: "block" }}>Notifications</Text>

            </Flex>

        </Tooltip>

    )

}

export default Notifications