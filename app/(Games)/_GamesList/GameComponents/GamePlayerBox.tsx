import React from "react";

const GamePlayerBox = () => {
  return (
    <iframe
      // src="https://www.youtube.com/embed/nMHSRV1khY4?si=yomaJpxALP86IjYB"
      // src="https://azgames.io/escape-road.embed"
      // src="https://azgames.io/stickman-slash.embed"
      src="https://zv1y2i8p.play.gamezop.com/g/w2hosWGmg"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="w-full h-[500px]"
    ></iframe>
  );
};

export default GamePlayerBox;
