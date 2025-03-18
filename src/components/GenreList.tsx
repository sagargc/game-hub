// import React from "react";
// import useData from "../hooks/useData";
import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading } from "@chakra-ui/react";
import useGenres, {Genre} from "../hooks/useGenres";
import getCroppedImageUrl from "../hooks/image-url";


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre } : Props) => {

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
        <>        
            <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
            <List>
                { data.map(genre => 
                    (<ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image 
                                boxSize="32px"
                                borderRadius='8' 
                                objectFit='cover'
                                src={getCroppedImageUrl(genre.image_background)} 
                                alt={genre.name} 
                                />  
                            {/* <Text fontSize='lg'>{genre.name}</Text> */}
                            <Button whiteSpace={'normal'} textAlign={'left'} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)}
                            fontSize='lg' variant='link'>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;