import React from "react";
import escapeRoadImage from "@Public/escape-road.webp";
import Link from "next/link";
import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { blogPostsObj, SEO_OBJ } from "Essential";
import GameCard from "../_GamesList/GameComponents/GameCard";
import GamePlayerBox from "../_GamesList/GameComponents/GamePlayerBox";

export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.ESCAPE_ROAD.absoluteURL });

const EscapeRoad = () => {
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
      <section className="col-span-12 md:col-span-8 lg:col-span-8  border-0 border-red-500 m-auto w-full mb-32 ">
        <div className="videoPlayer my-20 p-4">
          <GamePlayerBox />
          <article className="prose prose-lg md:prose-lg lg:prose-lg prose-invert max-w-none border border-slate-800  p-3 pt-11">
            <h1 className="text-4xl ">Escape Road 2 - The Ultimate Puzzle Adventure Game</h1>
            <p>
              Are you ready to take on a thrilling puzzle adventure? <strong>Escape Road 2</strong> is an exciting game
              that challenges your problem-solving skills and keeps you hooked for hours! In this guide, well explain
              everything you need to know about the game, including tips, features, and FAQs.
            </p>

            <h2>About Escape Road 2</h2>
            <p>
              Escape Road 2 is the sequel to the popular Escape Road game. Players navigate tricky mazes, avoid traps,
              solve puzzles, and make strategic decisions to escape each level. Its designed for both casual and
              hardcore gamers who love brain-teasing challenges.
            </p>

            <h2>Game Features</h2>
            <ul>
              <li>Engaging puzzle levels that get more challenging as you progress.</li>
              <li>Multiple paths to escape, requiring strategic thinking and careful planning.</li>
              <li>Colorful graphics and smooth animations for an immersive experience.</li>
              <li>Daily rewards and challenges to keep gameplay fresh.</li>
              <li>Offline mode available, so you can play anywhere, anytime.</li>
              <li>Compatible with Android and iOS devices.</li>
            </ul>

            <h2>How to Play Escape Road 2</h2>
            <ol>
              <li>
                Download the game from{" "}
                <Link href="https://play.google.com/store/apps/details?id=com.escape.road2" target="_blank">
                  Google Play Store
                </Link>{" "}
                or{" "}
                <a href="#" target="_blank">
                  Apple App Store
                </a>
                .
              </li>
              <li>Open the game and follow the tutorial to understand the basic controls.</li>
              <li>Move your character through the maze, avoiding traps and enemies.</li>
              <li>Solve puzzles to unlock doors and paths to escape.</li>
              <li>Collect coins and rewards to upgrade your character or unlock new levels.</li>
              <li>Plan your moves carefully — one wrong step can send you back to the start!</li>
            </ol>

            <h2>Tips & Tricks</h2>
            <ul>
              <li>Take your time: Dont rush, think through every move.</li>
              <li>Use hints wisely: Some levels provide hints to help you escape faster.</li>
              <li>Replay levels: Master tricky puzzles by replaying them to find better solutions.</li>
              <li>Observe the environment: Some traps are hidden until you get close.</li>
              <li>Upgrade wisely: Use collected coins to improve abilities or unlock shortcuts.</li>
            </ul>

            <h2>FAQs About Escape Road 2</h2>

            <h3>Q1: Is Escape Road 2 free to play?</h3>
            <p>
              Yes! Escape Road 2 is free to download and play on both Android and iOS. Some in-game purchases are
              available for cosmetic items or hints.
            </p>

            <h3>Q2: Can I play Escape Road 2 offline?</h3>
            <p>
              Yes. The game has an offline mode that allows you to enjoy most levels without an internet connection.
            </p>

            <h3>Q3: How do I unlock new levels?</h3>
            <p>
              New levels unlock automatically as you complete the previous ones. Completing daily challenges can also
              give you access to bonus levels.
            </p>

            <h3>Q4: What should I do if I get stuck on a puzzle?</h3>
            <p>
              If youre stuck, try using the hints provided in the game or replay the level to observe missed clues.
              Patience and careful observation usually help!
            </p>

            <h3>Q5: Is Escape Road 2 safe for kids?</h3>
            <p>
              Yes, the game is suitable for children and family-friendly. It focuses on puzzles and strategy rather than
              violence.
            </p>

            <h2>Conclusion</h2>
            <p>
              Escape Road 2 is a fun, challenging, and addictive puzzle game that tests your wits and reflexes. Whether
              you play casually or aim for mastery, each level offers new challenges and rewards. Download the game
              today and see if you can escape every road!
            </p>
          </article>
        </div>
      </section>
      <section className="col-span-12 md:col-span-2 lg:col-span-2 border-0 border-slate-500 mt-14">
        <div className="secondMasonryGrid p-0 mt-6 sticky top-16">
          <ol className="list-none grid grid-cols-2 gap-1 list-outside p-0 m-0">
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

export default EscapeRoad;
