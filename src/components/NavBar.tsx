import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.webp';


const NavBar = () => {

    return (   
        //spacing="24px" bg="coral" p="4"
        <HStack>
            <Image src={logo} alt="Game Hub Logo" boxSize='60px' />
            <Text fontSize="2xl" fontWeight="">Nav Bar</Text> 
        </HStack>
    );

}


export default NavBar;