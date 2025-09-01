import { blogPostsObj } from "Essential";
import React from "react";

const AppLayoutLoadingUI = () => {
  return (
    <div className="h-dvh bg-brandColor ">
      <div className="masonry  mt-20 text-white">
        <div className="firstSection">
          <h1 className="text-white text-2xl font-semibold animate-pulse duration-500 bg-slate-700 p-3 inline-block w-3/6 mb-0 rounded-lg"></h1>
          <ol className="list-none grid grid-cols-9 gap-1 list-outside p-0 m-0 ">
            {blogPostsObj.map((singleGame, index) => {
              return <li className="w-40 h-40 animate-pulse duration-500 bg-slate-700 rounded-3xl"></li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AppLayoutLoadingUI;
