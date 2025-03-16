// import React from "react";
// import useData from "../hooks/useData";
import useGenres from "../hooks/useGenres";

const GenreList = () => {

    // const { genres }  = useGenres(); 
    // return (
    //     <ul>
    //         { genres.map(genre => <li key={genre.id}>{genre.name}</li> )} 
    //     </ul>
    // )
    // const { data }  = useData<Genre>('/genres'); 


    // NEW:
    const { data }  = useGenres();

    if(!data) return null;
    return (
        <ul>
            { data.map(genre => <li key={genre.id}>{genre.name}</li> )} 
        </ul>
    )
}

export default GenreList;