import React from "react";
import GameImage from "./GameComponents/GameImage";
import anotherImage from "@Public/gadget-universe_16x9-cover.avif";

const GadgetUniverse = () => {
  return (
    <div className="">
      <GameImage srcImage={anotherImage} altText="racing-car-game" />
    </div>
  );
};

export default GadgetUniverse;
