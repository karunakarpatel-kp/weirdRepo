import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ, blogPostsObj } from "Essential";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import escapeRoadImage from "@Public/escape-road.png";
import madalinImage from "@Public/madalin.jpg";
import highwayRacerImage from "@Public/highway-racer-cover.png";
import americanImage from "@Public/american-road-trip.png";
import Slider from "react-slick";
import GameCard from "app/(Games)/_GamesList/GameComponents/GameCard";
import SlickContainer from "app/(Games)/_GamesList/GameComponents/SlickContainer";

// export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

const Home = () => {
  return (
    <>
      <div className="masonry  mt-20 text-white">
        <div className="firstSection">
          <h1 className="text-white text-2xl font-semibold">Popular Games</h1>
          <ol className="list-none grid grid-cols-9 gap-1 list-outside p-0 m-0">
            {blogPostsObj.map((singleGame, index) => {
              const { url, title, featuredImage, featuredImageAltText } = singleGame;
              return (
                <GameCard
                  linkHref={url}
                  imgSrc={featuredImage}
                  imgAlt={featuredImageAltText}
                  gameTitle={title}
                  linkTitle={title}
                />
              );
            })}
          </ol>
        </div>

        <div>
          <SlickContainer autoPlay={true} headingTitle="Trending Games" infinite={true} rows={1} slidesToShow={8} />
        </div>
      </div>
    </>
  );
};

export default Home;
