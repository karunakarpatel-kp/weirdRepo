import React from "react";
import racingImage from "@Public/racing.avif";
import GameImage from "./GameComponents/GameImage";

const Racing = () => {
  return (
    <div className="">
      <GameImage srcImage={racingImage} altText="racing-car-game" />
    </div>
  );
};

export default Racing;
