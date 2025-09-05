import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import HomePageAd from "Components/UI/HomePageAd";
import { SEO_OBJ, blogPostsObj } from "Essential";

import GameCard from "app/(Games)/_GamesList/GameComponents/GameCard";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

const Home = () => {
  return (
    <>
      <div className="masonry  mt-20 text-white min-h-[70vh]">
        <HomePageAd />
        <div className="firstSection px-2">
          <h1 className="text-white text-xl text-center md:text-left md:text-2xl font-semibold">Popular Games</h1>
          <ol className="list-none grid grid-cols-3 gap-1 md:grid-cols-9 md:gap-1 list-outside p-0 m-0 ">
            {blogPostsObj.map((singleGame, index) => {
              const { url, title, featuredImage, featuredImageAltText } = singleGame;
              return (
                <GameCard
                  key={index}
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

        {/* <div>
          <SlickContainer autoPlay={true} headingTitle="Trending Games" infinite={true} rows={1} slidesToShow={8} />
        </div> */}
      </div>
    </>
  );
};

export default Home;
