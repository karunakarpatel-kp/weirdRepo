"use client";

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryStyle = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 4, 750: 3, 900: 4 }}>
      <Masonry columnsCount={4}>
        <div className="bg-slate-300 text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi minima similique facilis maxime perspiciatis,
            Lorem ipsum dolor, sit amet consectetur adipisimaxime perspiciatis, Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nisi minima similique facilis maxime perspiciatis, Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nisi minima similique facilis maxime perspiciatis, aliquid nostrum ea neque illo ut!
          </p>
        </div>
        <div className="bg-green-300 ">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi minima similique facilis maxime perspiciatis,
            aliquid nostrum ea neque illo ut!
          </p>
        </div>
        <div className="bg-yellow-300 ">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi minima similique facilis maxime perspiciatis,
            aliquid nostrum ea neque illo ut!
          </p>
        </div>
        <div className="bg-green-300 ">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi minima similique facilis maxime perspiciatis,
            aliquid nostrum ea neque illo ut!
          </p>
        </div>
        <div className="bg-yellow-300 ">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi minima similique facilis maxime perspiciatis,
            aliquid nostrum ea neque illo ut!
          </p>
        </div>
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryStyle;
