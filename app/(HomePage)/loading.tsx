import { blogPostsObj } from "Essential";
import React from "react";

const AppLayoutLoadingUI = () => {
  return (
    <div className="mt-20 h-auto min-h-[65vh]">
      <div className="bg-brandColor ">
        <div className="masonry  mt-20 text-white">
          <div className="firstSection">
            <ol className="list-none grid grid-cols-9 gap-1 list-outside p-0 m-0 ">
              {blogPostsObj.map((singleGame, index) => {
                return <li className="w-40 h-40 animate-pulse duration-500 bg-slate-700 rounded-3xl" key={index}></li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayoutLoadingUI;
