import React from "react";
import escapeRoadImage from "@Public/escape-road.webp";
import Link from "next/link";
import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { blogPostsObj, SEO_OBJ } from "Essential";
import GameCard from "../_GamesList/GameComponents/GameCard";
import GamePlayerBox from "../_GamesList/GameComponents/GamePlayerBox";
import GamePlayerBox2 from "../_GamesList/GameComponents/GamePlayerBox2";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.TRAFFIC_ROAD.absoluteURL });

const TrafficRoad = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="hidden md:col-span-2 lg:col-span-2  lg:block border-0 border-green-800 mt-14 text-white ">
        <div className="secondMasonryGrid p-0 mt-6 sticky top-16">
          <ol className="list-none grid grid-cols-3 gap-1 list-outside p-0 m-0  ">
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
      </div>
      <section className="col-span-12 md:col-span-8 lg:col-span-8  border-0 border-red-500 m-auto w-full md:mb-32 ">
        <div className="videoPlayer my-20 p-4">
          <GamePlayerBox2 />
          <article className="prose prose-lg md:prose-lg lg:prose-lg prose-invert max-w-none border border-slate-800  p-3 pt-11">
            <header>
              <h1>🚦 Traffic Road Game Fun and Easy Guide for Kids 🏍️</h1>
              <p>Learn how to play Traffic Road, get tips, and enjoy the game safely!</p>
            </header>

            <section>
              <h2>🎮 What is Traffic Road?</h2>
              <p>
                Traffic Road is a fun game where you ride a motorcycle through busy streets. Your goal is to avoid cars,
                trucks, and other obstacles while collecting coins and trying to go as far as you can without crashing.
                🏁
              </p>
            </section>

            <section>
              <h2>🛣️ How to Play</h2>
              <ul>
                <li>
                  <strong>Steer Left or Right:</strong> Use arrow keys or swipe to move your bike.
                </li>
                <li>
                  <strong>Speed Up:</strong> Press the up arrow key or tap the screen to go faster.
                </li>
                <li>
                  <strong>Slow Down:</strong> Press the down arrow key or tap to slow down.
                </li>
                <li>
                  <strong>Avoid Crashes:</strong> Watch out for other vehicles. One crash ends the game! 😱
                </li>
              </ul>
            </section>

            <section>
              <h2>🌟 Game Modes</h2>
              <ul>
                <li>
                  <strong>Endless Mode:</strong> Ride as far as you can without crashing.
                </li>
                <li>
                  <strong>Time Trial:</strong> Reach the finish line before the clock runs out.
                </li>
                <li>
                  <strong>Career Mode:</strong> Complete challenges and unlock new bikes.
                </li>
              </ul>
            </section>

            <section>
              <h2>🏆 Tips to Win</h2>
              <div>
                <ul>
                  <li>Stay alert and watch the road carefully.</li>
                  <li>Collect coins to unlock cool upgrades.</li>
                  <li>Practice makes perfect. Keep playing to get better!</li>
                </ul>
              </div>
            </section>

            <section>
              <h2>❓ FAQs About Traffic Road Game</h2>

              <h3>1. What is Traffic Road?</h3>
              <p>Its a motorcycle game where you ride through busy roads, avoid crashes, and collect coins.</p>

              <h3>2. How do I control the bike?</h3>
              <p>
                You can use arrow keys on a computer or swipe on a mobile device to steer left, right, speed up, or slow
                down.
              </p>

              <h3>3. Is this game safe for kids?</h3>
              <p>
                Yes! The game has simple controls and bright colors. But remember to take breaks and don’t play for too
                long.
              </p>

              <h3>4. How can I get better?</h3>
              <p>Watch the road, go slowly at first, collect coins, and practice often to improve your skills.</p>

              <h3>5. Are there different game modes?</h3>
              <p>Yes, there are Endless Mode, Time Trial, and Career Mode with fun challenges and rewards.</p>
            </section>
          </article>
        </div>
      </section>
      <section className="col-span-12 md:col-span-2 lg:col-span-2 border-0 border-slate-500 md:mt-14">
        <div className="secondMasonryGrid p-0 md:mt-6 sticky top-16  -mt-20 mb-10 md:mb-0">
          <ol className="list-none grid grid-cols-3 gap-1 list-outside px-3 md:p-0 m-0">
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
      </section>
    </div>
  );
};

export default TrafficRoad;
