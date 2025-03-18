import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: string;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform } [];
    metacritic: number;
}

// interface FetchGamesResponse {
//     count: number;
//     results: Game[];
// }

// const useGames = () => {

//     const [games, setGames] = useState<Game[]>([]);
//     const [error, setError] = useState(null);
//     const [isLoading, setLoading] = useState(false);

//     useEffect(() => {   
//         const controller = new AbortController();

//         setLoading(true);
//         apiClient
//             .get<FetchGamesResponse>('/games', { signal: controller.signal })
//             .then(response => { 
//                 setGames(response.data.results);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 if(error instanceof CanceledError) return;
//                 setError(error.message)
//                 setLoading(false);
//             });

//         return () => controller.abort();
//     }, [])

//     return { games, error, isLoading };

// }

// NEW WAY;


// const useGames = (
//         selectedGenre: Genre | null, 
//         selectedPlatform: Platform | null
//     ) => 
// useData<Game>('/games', {
//     params: { 
//         genres: selectedGenre?.id, 
//         platforms: selectedPlatform?.id 
//     }}, 
//     [ selectedGenre?.id, selectedPlatform?.id]);    

const useGames = (
        gameQuery: GameQuery
    ) => 
    useData<Game>('/games', 
        {
            params: { 
                genres: gameQuery.genre?.id, 
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        }, 
        [gameQuery]);    

export default useGames;