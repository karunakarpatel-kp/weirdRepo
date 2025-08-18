"use client";

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

// export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

const Home = () => {
  return (
    <>
      <div className="masonry  mt-20 text-white">
        <div className="firstMasonryGrid p-0 m-0">
          <h1 className="text-white text-2xl font-semibold">Trending Games</h1>
          <ol className="list-none grid grid-cols-9 gap-1 list-outside p-0 m-0">
            <GameCard
              linkHref="/escape-road"
              imgSrc={escapeRoadImage}
              imgAlt="Escape-Road"
              gameTitle="Escape Road "
              linkTitle="Escape-Road"
            />

            <GameCard
              linkHref="/escape-road"
              imgSrc={highwayRacerImage}
              imgAlt="Escape-Road"
              gameTitle="Escape Road "
              linkTitle="Escape-Road"
            />

            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={highwayRacerImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white p-0 m-0  ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl " />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={highwayRacerImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white p-0 m-0  ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl " />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
          </ol>
        </div>

        <div className="secondMasonryGrid p-0 mt-6">
          <h1 className="text-white text-2xl font-semibold">Popular Games</h1>
          <ol className="list-none grid grid-cols-9 gap-1 list-outside p-0 m-0">
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400 ">
              <Link href={"/escape-road"} className="text-white block p-0 m-0 ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400 row-span-2 col-span-2">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={highwayRacerImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400 ">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white p-0 m-0  ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl " />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={highwayRacerImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
          </ol>
        </div>

        <div className=" secondMasonryGrid p-0 mt-6">
          <h1 className="text-white text-2xl font-semibold">Car Games</h1>
          <ol className="slide-container list-none  list-outside p-0 m-0 w-full [&_li]:px-2 ">
            <Slider autoplay={true} infinite={true} slidesToShow={8} rows={2} className="border-0 border-red-500 ">
              <li className="border-0 border-green-400  ">
                <Link href={"/escape-road"} className="text-white block p-0 m-0 ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl " />
                </Link>
              </li>
              <li className="border-0 border-green-400 ">
                <Link href={"/escape-road"} className="text-white block p-0 m-0 ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400 row-span-2 col-span-2">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={highwayRacerImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400 ">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white p-0 m-0  ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl " />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400 row-span-2 col-span-2">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={highwayRacerImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400  ">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400 ">
                <Link href={"/escape-road"} className="text-white block p-0 m-0 ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
            </Slider>
          </ol>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold">Trending Games</h1>
          <ol className="list-none grid grid-cols-9 gap-1 list-outside p-0 m-0">
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400 ">
              <Link href={"/escape-road"} className="text-white block p-0 m-0 ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={highwayRacerImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white p-0 m-0  ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl " />
              </Link>
            </li>
            <li className="border-0 border-green-400 row-span-2 col-span-2">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>

            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white p-0 m-0  ">
                <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl " />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
            <li className="border-0 border-green-400">
              <Link href={"/racing"} className="text-white block p-0 m-0 ">
                <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
              </Link>
            </li>
          </ol>
        </div>

        <div className=" secondMasonryGrid p-0 mt-6">
          <h1 className="text-white text-2xl font-semibold">Car Games</h1>
          <ol className="slide-container list-none  list-outside p-0 m-0 w-full [&_li]:px-2 ">
            <Slider
              autoplay={false}
              infinite={true}
              slidesToShow={6}
              rows={1}
              arrows={true}
              className="border-0 border-red-500 "
            >
              <GameCard
                linkHref="/escape-road"
                imgSrc={escapeRoadImage}
                imgAlt="Escape-Road"
                gameTitle="Escape Road "
                linkTitle="Escape-Road"
                scalVal={105}
              />
              <GameCard
                linkHref="/escape-road"
                imgSrc={escapeRoadImage}
                imgAlt="Escape-Road"
                gameTitle="Escape Road "
                linkTitle="Escape-Road"
                scalVal={105}
              />
              <GameCard
                linkHref="/escape-road"
                imgSrc={escapeRoadImage}
                imgAlt="Escape-Road"
                gameTitle="Escape Road "
                linkTitle="Escape-Road"
                scalVal={105}
              />
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400 ">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white p-0 m-0  ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl " />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400 row-span-2 col-span-2">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={highwayRacerImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400  ">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400 ">
                <Link href={"/escape-road"} className="text-white block p-0 m-0 ">
                  <Image src={madalinImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
              <li className="border-0 border-green-400">
                <Link href={"/racing"} className="text-white block p-0 m-0 ">
                  <Image src={escapeRoadImage} alt="escape-image" className="p-0 m-0 rounded-2xl" />
                </Link>
              </li>
            </Slider>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Home;
