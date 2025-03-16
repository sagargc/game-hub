// import React from "react";
// import useData from "../hooks/useData";
import { HStack, List, ListItem, Image, Text, Spinner, Button } from "@chakra-ui/react";
import useGenres, {Genre} from "../hooks/useGenres";
import getCroppedImageUrl from "../hooks/image-url";


interface Props {
    onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre } : Props) => {

    // const { genres }  = useGenres(); 
    // return (
    //     <ul>
    //         { genres.map(genre => <li key={genre.id}>{genre.name}</li> )} 
    //     </ul>
    // )
    // const { data }  = useData<Genre>('/genres'); 


    // NEW:
    const { data, isLoading, error }  = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />;

    if(!data) return null;

    return (
        <List>
            { data.map(genre => 
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image 
                            boxSize="32px"
                            borderRadius='8' 
                            src={getCroppedImageUrl(genre.image_background)} 
                            alt={genre.name} 
                        />  
                        {/* <Text fontSize='lg'>{genre.name}</Text> */}
                        <Button onClick={() => onSelectGenre(genre)}
                        fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    );
};

export default GenreList;