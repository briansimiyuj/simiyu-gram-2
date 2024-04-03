import { Flex, Text, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

const UserNotFound = () => {

	return (

		<Flex 
			flexDir={"column"} 
			textAlign={"center"} 
			mt={200}
			justifyContent={"center"}
			alignItems={"center"}
		>

			<Text fontSize={"2xl"} fontWeight={700}>User Not Found</Text>

			<Link as={RouterLink} to={"/"} color={"blue.500"} w={"max-content"} mx={"auto"}>

				Go home

			</Link>

		</Flex>

	)

}

export default UserNotFound