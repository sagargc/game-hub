import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms"; 


// trasnfered into useGames.ts hook
//interface Game {
//    id: string;
//    name: string;
//}

//interface FetchGamesResponse {
//    count: number;
//    results: Game[];
//}

interface Props {
   selectedGenre: Genre | null;
   selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform } : Props) => {
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
    // const {games, error, isLoading} = useGames();

    const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform);
    const skeletons = [1,2,3,4,5,6];

    return (
        <> 
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm:1, md:2, lg:3, xl: 5  }} padding='10px'  spacing={3}>
                {isLoading && skeletons.map((skeleton) => <GameCardContainer key={skeleton} ><GameCardSkeleton/></GameCardContainer>)}                
                {data.map(game => ( 
                    //<li key={game.id}>{game.name}</li>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )
}


export default GameGrid;