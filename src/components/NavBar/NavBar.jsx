import { Button, Container, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {

	return (

		<Container maxW={"container.lg"} my={4}>

			<Flex 
				w={"full"} 
				justifyContent={{ base: "center", sm: "space-between" }} 
				alignItems={"center"}
				flexDir={{ base: "column", sm: "row" }}
			>

                <h1 style={{fontSize:"35px", fontWeight: 900, fontStyle: "italic"}}>SimiyuGram</h1>

				<Flex 
					gap={{ base: 4, sm: 2 }}
					mt={{ base: 5, sm: 15 }}
				>

					<Link to='/auth'>

						<Button colorScheme={"blue"} size={"sm"}>Login</Button>

					</Link>

					<Link to='/auth'>

						<Button variant={"outline"} size={"sm"}>Signup</Button>

					</Link>

				</Flex>

			</Flex>

		</Container>

	);

};

export default NavBar