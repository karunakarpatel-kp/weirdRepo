import React from "react";
import { GiGameConsole, GiInspiration } from "react-icons/gi";
import { SiAmazongames } from "react-icons/si";
import { SiEpicgames } from "react-icons/si";
import { CgGames } from "react-icons/cg";
import { MdInstallDesktop } from "react-icons/md";
import { RiDeviceFill } from "react-icons/ri";
import { GiThreeFriends } from "react-icons/gi";
import { MdFreeCancellation } from "react-icons/md";

const HomePageAd = () => {
  return (
    <>
      <ol className="homePageAd list-none grid grid-cols-12  px-3  md:w-5/6 m-auto my-4 p-0  ">
        <li className="one col-span-4 md:col-span-2  border border-slate-700 text-center">
          <span className="">
            <SiAmazongames className="col-span-2 md:col-span-1 text-5xl m-auto text-purple-500 animate-pulse" />
            <h1 className="col-span-4 md:col-span-2 font-semibold text-lg md:text-lg  text-slate-300 mt-6 md:mt-2 ">
              Welcome to CrazyPoki Games
            </h1>
          </span>
        </li>

        <li className="one col-span-4 md:col-span-2 border border-slate-700 text-center">
          <div className="space-y-2 pt-2 pb-4">
            <CgGames className="col-span-2 md:col-span-1 text-5xl m-auto text-purple-500 " />
            <h1 className="col-span-2 md:col-span-1 font-semibold text-lg text-slate-300 ">4000+ games</h1>
          </div>
        </li>

        <li className="one col-span-4 md:col-span-2 border border-slate-700 text-center">
          <div className="space-y-2 pt-2 pb-4">
            <MdInstallDesktop className="col-span-2 md:col-span-1 text-4xl m-auto text-purple-500 " />
            <h1 className="col-span-2 md:col-span-1 font-semibold text-lg text-slate-300 ">No Install Required</h1>
          </div>
        </li>

        <li className="one col-span-4 md:col-span-2 border border-slate-700 text-center ">
          <div className="space-y-2 pt-2 pb-4">
            <RiDeviceFill className="col-span-2 md:col-span-1 text-4xl m-auto text-purple-500 my-3" />
            <h1 className="col-span-2 md:col-span-1 font-semibold text-base md:text-lg text-slate-300 ">
              On any Device
            </h1>
          </div>
        </li>

        <li className="one col-span-4 md:col-span-2 border border-slate-700 text-center ">
          <div className="space-y-2 pt-2 pb-4">
            <GiThreeFriends className="col-span-2 md:col-span-1 text-4xl m-auto text-purple-500 " />
            <h1 className="col-span-2 md:col-span-1 font-semibold text-base md:text-lg text-slate-300 ">
              Play with Friends
            </h1>
          </div>
        </li>

        <li className="one col-span-4 md:col-span-2 border border-slate-700 text-center ">
          <div className="space-y-2 pt-2 pb-4">
            <MdFreeCancellation className="col-span-2 md:col-span-1 text-4xl m-auto text-purple-500 " />
            <h1 className="col-span-2 md:col-span-1 font-semibold text-base md:text-xl text-slate-300 ">
              All For Free of Cost
            </h1>
          </div>
        </li>
      </ol>
    </>
  );
};

export default HomePageAd;
