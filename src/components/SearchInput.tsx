import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";


interface Props {
    onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch} : Props) => {
    
    const ref = useRef<HTMLInputElement>(null);
    
    return (
        // <form style={{ width: '100%' }} onSubmit={(event) => {
        <form onSubmit={(event) => {
            event.preventDefault();
            // if(ref.current?.value)console.log(ref.current.value);
            if(ref.current?.value) onSearch(ref.current.value);
        }}>
            <InputGroup>
                {/* pointerEvents="none" */}
                <InputLeftElement  children={<BsSearch />} />
                <Input ref={ref} borderRadius={20} placeholder="Search games..." variant={'filled'} />
            </InputGroup>
        </form>
    )
}

export default SearchInput;