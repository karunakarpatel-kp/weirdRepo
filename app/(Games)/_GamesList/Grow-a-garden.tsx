import React from "react";
import pieceImage from "@Public/piece-of-cake-merge-and-bake_16x9-cover.avif";
import Image from "next/image";
import GameImage from "./GameComponents/GameImage";

const GrowAGarden = () => {
  return (
    <div>
      <GameImage srcImage={pieceImage} altText="piece-of-cake-poster" />
    </div>
  );
};

export default GrowAGarden;
