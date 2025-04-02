// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";

// interface Genre {
//     id: number;
//     name: string;
// }

// interface FetchGenresResponse {
//     count: number;
//     results: Genre[];
// }

// const useGenres = () => {   
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [error, setError] = useState(null);
//     const [isLoading, setLoading] = useState(false);

//     useEffect(() => {   
//         const controller = new AbortController();

//         setLoading(true);
//         apiClient
//             .get<FetchGenresResponse>('/genres', { signal: controller.signal })
//             .then(response => { 
//                 setGenres(response.data.results);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 if(error instanceof CanceledError) return;
//                 setError(error.message)
//                 setLoading(false);
//             });

//         return () => controller.abort();
//     }, [])

//     return { genres, error, isLoading };

// }

// export default useGenres;

// NEW WAY;

// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    imgage_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => ( { data: genres, isLoading: false, error: null } )

export default useGenres;