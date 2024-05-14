import { Button, Container, Flex, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InstagramMobileLogo } from "../../assets/constants";

const NavBar = () => {

	const [isLessThan768] = useMediaQuery("(max-width: 768px)")

	return (

		<Container maxW={"container.lg"} my={4}>

			<Flex 
				w={"full"} 
				justifyContent={{ base: "center", sm: "space-between" }} 
				alignItems={"center"}
				flexDir={{ base: "column", sm: "row" }}
			>

                <Flex gap={5} alignItems={"center"}>

					{ isLessThan768 && <InstagramMobileLogo/> }

					<h1 style={{fontSize:"35px", fontWeight: 900, fontStyle: "italic"}}>BrisGram</h1>

				</Flex>

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