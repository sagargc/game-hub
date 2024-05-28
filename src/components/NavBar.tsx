import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch";


const NavBar = () => {

    return (   
        //spacing="24px" bg="coral" p="4"
        <HStack justifyContent='space-between   '>
            <Image src={logo} alt="Game Hub Logo" boxSize='60px' />
            <ColorModeSwitch /> 
        </HStack>
    );

}


export default NavBar;