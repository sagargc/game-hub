import React from "react";
import { Image, BoxProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Props {
  rating: number;
}

interface EmojiData extends BoxProps {
  src: string;
  alt: string;
}

const Emoji = ({ rating }: Props) => {
  console.log("Original rating:", rating);

  // Custom rating mapping due to rating decimal values.
  let emojiRating: number | null = null;

  if (rating >= 3 && rating < 4) {
    emojiRating = 3;
  } else if (rating >= 4 && rating < 5) {
    emojiRating = 4;
  } else if (rating >= 5) {
    emojiRating = 5;
  }

  if (!emojiRating) {
    console.log("Rating too low for emoji.");
    return null;
  }

  const emojiMap: Record<number, EmojiData> = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  const emoji = emojiMap[emojiRating];

  return <Image {...emoji} marginTop={1} />;
};

export default Emoji;
