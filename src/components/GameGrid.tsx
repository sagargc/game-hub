import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

// trasnfered into useGames.ts hook
//interface Game {
//    id: string;
//    name: string;
//}

//interface FetchGamesResponse {
//    count: number;
//    results: Game[];
//}

const GameGrid = () => {
    // transfered into useGames.ts hook
    //const [games, setGames] = useState<Game[]>([]);
    //const [error, setError] = useState(null);

    //useEffect(() => {   
    //    apiClient
    //        .get<FetchGamesResponse>('/xgames')
    //        .then(response => setGames(response.data.results))
    //        .catch(error => setError(error.message))

    //})

    // new way using hook
    const {games, error} = useGames();

    return (
        <> 
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    )
}


export default GameGrid;