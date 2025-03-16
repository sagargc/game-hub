// import React from "react";
// import useData from "../hooks/useData";
import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../hooks/image-url";

const GenreList = () => {

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
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            )}
        </List>
    );
};

export default GenreList;