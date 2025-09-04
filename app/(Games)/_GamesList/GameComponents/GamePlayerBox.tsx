import React from "react";

const GamePlayerBox = () => {
  return (
    <div className="border border-slate-700  border-b-0 bg-slate-900 ">
      <iframe
        // src="https://www.youtube.com/embed/nMHSRV1khY4?si=yomaJpxALP86IjYB"
        src="https://azgames.io/escape-road.embed"
        // src="https://zv1y2i8p.play.gamezop.com/g/w2hosWGmg"
        title="Escape Road Game Play"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full md:h-[600px] h-[400px] p-2"
      ></iframe>
      <div className="controlContainer text-white grid grid-cols-12 border border-slate-800 bg-slate-900">
        <div className="title col-span-12 md:col-span-3 lg:col-span-4 p-2 border-0">
          <h1 className="text-xl text-white font-bold  mx-auto my-auto pl-5 md:text-normal text-nowrap md:pl-1  ">
            Escape Road 2{" "}
          </h1>
        </div>
        <div className="controlls col-span-12 md:col-span-9 lg:col-span-8 border-0 border-white text-center md:text-right md:pr-9 space-x-3 space-y-2 md:my-auto pb-3">
          <span className="border border-slate-700 px-3 md:px-6 py-1 rounded-sm cursor-pointer inline-block">Like</span>
          <span className="border border-slate-700 px-3 md:px-6 py-1 rounded-sm cursor-pointer inline-block">
            Full Screen
          </span>
          <span className="border border-slate-700 px-3 md:px-6 py-1 rounded-sm cursor-pointer inline-block">
            Theater Mode
          </span>
        </div>
      </div>
    </div>
  );
};

export default GamePlayerBox;
