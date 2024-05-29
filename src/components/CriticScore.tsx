import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

//const CriticScore = ( { score } : { score: number } ) => {
const CriticScore = ( { score } : Props ) => {
    //const color = score >= 75 ? 'green.500' : score >= 50 ? 'yellow.500' : 'red.500';
    let color = score >= 75 ? 'green' : score >= 50 ? 'yellow' : 'red';
    return (
        //<span style={{ color }}>
        //    {score}
        //</span>
        //{score >= 75 ? 'green' : score >= 50 ? 'yellow' : 'red'}
        // color={} for foreground  text only
        // colorScheme={} for background and foreground text and all the border and shadow
        <Badge fontSize='14px' paddingX={2} borderRadius='4px' colorScheme={color}>
            {score}
        </Badge>
    )
}


export default CriticScore;