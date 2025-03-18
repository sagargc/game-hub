import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/logo.webp';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";


interface Props {
    onSearch: (searchText: string) => void;
}
const NavBar = ( {onSearch} : Props) => {

    return (   
        //spacing="24px" bg="coral" p="4"
        // <HStack justifyContent='space-between' paddingX={3}>
        <HStack paddingX='10px'>
            <Image src={logo} alt="Game Hub Logo" boxSize='60px' />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch /> 
        </HStack>
    );

}


export default NavBar;