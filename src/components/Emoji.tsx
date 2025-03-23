import React from "react";
import { Image, BoxProps, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
    console.log("Rating:", rating);
    if (rating < 3) {
        console.log("Rating too low for emoji.");
        return null;
    }

    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: "meh", boxSize: "25px" },
        4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
        5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
    };

    // const emoji = emojiMap[rating];
    // return <Image {...emoji} marginTop={1} />;
    // OR
    return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
