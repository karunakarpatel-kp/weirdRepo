import React from "react";
import escapeRoadImg from "@Public/escape-road.webp";
import GameImage from "../_GamesList/GameComponents/GameImage";

const EscapeRoad = () => {
  return (
    <div className="">
      <GameImage srcImage={escapeRoadImg} altText="escape-road" />
    </div>
  );
};

export default EscapeRoad;
