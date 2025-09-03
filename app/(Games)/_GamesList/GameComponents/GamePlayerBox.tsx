import React from "react";

const GamePlayerBox = () => {
  return (
    <div className="border border-slate-700 ">
      <iframe
        src="https://www.youtube.com/embed/nMHSRV1khY4?si=yomaJpxALP86IjYB"
        // src="https://azgames.io/escape-road.embed"
        // src="https://zv1y2i8p.play.gamezop.com/g/w2hosWGmg"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-[500px] p-3"
      ></iframe>
      <div className="controlContainer text-white grid grid-cols-12 bg-slate-800">
        <div className="title border border-white col-span-4">
          <h1 className="text-lg text-white font-semibold my-1">Escape Road 2</h1>
        </div>
        <div className="controlls col-span-8 border border-white text-right">
          <span>Like</span>
          <span>FullScreen</span>
          <span>Theater Mode</span>
        </div>
      </div>
    </div>
  );
};

export default GamePlayerBox;
