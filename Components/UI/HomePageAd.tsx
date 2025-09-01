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
      <ol className="homePageAd list-none grid grid-cols-12 px-3  md:w-5/6 m-auto my-4 p-0 ">
        <li className="one col-span-4 border border-slate-700 text-center">
          <span className="inline-flex md:flex flex-wrap justify-center align-middle mt-2">
            {/* <SiAmazongames className="text-5xl -mb-5 animate-bounce" /> */}
            <h1 className="font-semibold text-base md:text-lg text-slate-300 mt-6 md:mt-2">
              Welcome to CrazyPokiGames
            </h1>
          </span>
        </li>

        <li className="one col-span-4 border border-slate-700 text-center">
          <span className="inline-flex md:flex flex-wrap justify-center align-middle mt-3">
            <CgGames className="text-4xl  mr-3 text-purple-500" />
            <h2 className="text-slate-300 font-semibold text-lg m-0">4000+ games</h2>
          </span>
        </li>
        <li className="one col-span-4 border border-slate-700 text-center">
          <span className="inline-flex md:flex flex-wrap justify-center align-middle mt-3">
            <MdInstallDesktop className="text-3xl text-purple-500 mr-3  md:my-0" />
            <h3 className="text-slate-300 font-semibold text-base md:text-lg m-0">No Install Required</h3>
          </span>
        </li>
        <li className="one col-span-4 border border-slate-700">
          <span className="inline-flex md:flex flex-wrap justify-center align-middle mt-2 py-2">
            <RiDeviceFill className="text-3xl text-purple-500  mr-3 md:my-0" />
            <h4 className="text-slate-300 font-semibold text-base md:text-lg m-0">On any device</h4>
          </span>
        </li>
        <li className="one col-span-4 border border-slate-700 ">
          <span className="inline-flex md:flex flex-wrap justify-center align-middle mt-2 py-2">
            <GiThreeFriends className="text-3xl text-purple-500 mr-3 my-3 md:my-0" />
            <h1 className="text-slate-300 font-semibold text-base md:text-lg m-0">Play with friends</h1>
          </span>
        </li>
        <li className="col-span-4 border border-slate-700 text-center">
          <span className="inline-flex md:flex flex-wrap justify-center align-middle mt-2 py-2">
            <MdFreeCancellation className="text-3xl text-purple-500 mr-3 my-3 md:my-0" />
            <h1 className="text-slate-300 font-semibold text-base md:text-lg m-0">All for free of cost.</h1>
          </span>
        </li>
      </ol>
    </>
  );
};

export default HomePageAd;
