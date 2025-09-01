"use client";

import { blogPostsObj } from "Essential";
import React from "react";
import Slider from "react-slick";
import GameCard from "./GameCard";

interface SlickContainerProps {
  headingTitle: string;
  autoPlay: boolean;
  infinite: boolean;
  slidesToShow: number;
  rows: number;
}

const SlickContainer = (props: SlickContainerProps) => {
  const { headingTitle, autoPlay, infinite, slidesToShow, rows } = props;
  return (
    <div className="p-0 mt-6">
      <h2 className="text-white text-2xl font-semibold">{headingTitle}</h2>
      <ol className="slide-container list-none  list-outside p-0 m-0 w-full [&_li]:px-2 ">
        <Slider
          autoplay={autoPlay}
          infinite={infinite}
          slidesToShow={slidesToShow}
          rows={rows}
          className="border-0 border-red-500 "
        >
          {blogPostsObj.map((singleGame) => {
            const { url, title, featuredImage, featuredImageAltText } = singleGame;
            return (
              <GameCard
                linkHref={url}
                imgSrc={featuredImage}
                imgAlt={featuredImageAltText}
                gameTitle={title}
                linkTitle={title}
                key={new Date().getSeconds()}
              />
            );
          })}
        </Slider>
      </ol>
    </div>
  );
};

export default SlickContainer;
