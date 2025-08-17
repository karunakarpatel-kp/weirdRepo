import Image from "next/image";
import React from "react";

interface GameImageProps {
  srcImage: any;
  altText: string;
}

const GameImage = (props: GameImageProps) => {
  const { srcImage, altText } = props;
  return <Image src={srcImage} alt={altText} className="rounded-2xl" />;
};

export default GameImage;
