import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../hooks/image-url";
import Emoji from "./Emoji";

interface Props {
    game: Game

}

const GameCard = ( { game } : Props) => {
    // 8-12
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image, 600, 400)} alt={game.name} />
            <CardBody>
                {/* <Heading fontSize='2xl'>{game.name}</Heading> */}
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map( p => p.platform )} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}/></Heading>
            </CardBody> 
        </Card>

    )

}

export default GameCard;
