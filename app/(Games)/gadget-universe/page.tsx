import React from "react";
import anotherImage from "@Public/gadget-universe_16x9-cover.avif";
import GameImage from "../_GamesList/GameComponents/GameImage";

const GadgetUniverse = () => {
  return (
    <div className="">
      <GameImage srcImage={anotherImage} altText="racing-car-game" />
    </div>
  );
};

export default GadgetUniverse;
