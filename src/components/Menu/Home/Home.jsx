import { Tooltip, Link, Text } from "@chakra-ui/react"
import { AiFillHome } from "react-icons/ai"
import { Link as RouterLink } from "react-router-dom"

const Home = () =>{

    return(

        <Tooltip
            hasArrow 
            label="Home"
            placement="right"
            openDelay={500}
            ml={1}
            display={{base: "block", md: "none"}}
        >

            <Link
                to="/"
                display={"flex"}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                p={2}
                justifyContent={{ base: "center", md: "start" }}
                _hover={{bg: "whiteAlpha.400"}}
                borderRadius={6}
            >

                <AiFillHome size={25}/>

                <Text display={{ base: "none", md: "block" }}>Home</Text>

            </Link>

        </Tooltip>

    )

}

export default Home