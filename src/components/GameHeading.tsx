import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ( {gameQuery} : Props) => {
    // Games
    // Action Games
    // Xbox Games
    // Xbox Action Games

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;    
    
    return (
        // size={"2xl"} textAlign={"left"} 
        <Heading as={"h1"} marginY={5} fontSize={"5xl"} marginBottom={5}>
            {heading}
        </Heading>
    )
}

export default GameHeading;
