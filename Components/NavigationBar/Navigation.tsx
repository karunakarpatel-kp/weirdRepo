"use client";
import React from "react";
import Logo from "public/Logo.svg";
import { FaBlog, FaCar, FaCarSide, FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { IoIosLogIn, IoMdClose } from "react-icons/io";
import Link from "next/link";
import { GiGameConsole, GiInspiration } from "react-icons/gi";
import { SiAmazongames } from "react-icons/si";
import { SiEpicgames } from "react-icons/si";

const Navigation = () => {
  const navigate = useRouter();

  const onLogoClickHandler = () => {
    navigate.push("/");
  };

  return (
    <>
      <div
        className={"h-16 bg-brandColor  border-b border-b-slate-700  md:ml-0 pl-2 grid grid-cols-12 fixed w-full z-50"}
      >
        {/* Desktop */}
        <div className="hidden md:invisible lg:flex col-span-1 border-0 border-white self-stretch justify-center items-center "></div>
        <div
          className="col-span-5 md:col-span-4  border-0 border-green-800 mt-3 ml-2 md:ml-0 lg:ml-0 cursor-pointer  inline-flex"
          onClick={onLogoClickHandler}
        >
          <SiEpicgames className="text-white text-6xl mr-3 animate-bounce animate duration-700 ease-in-out" />
          <h1 className=" text-xl font-semibold mt-2 text-slate-300">CrazyPokiGames</h1>
        </div>
        <div className="col-span-7 md:col-span-6 border-0 border-purple-400 m-0 p-0 mr-3  ">
          <ul className="list-none flex space-x-2 md:space-x-6 text-white justify-end mt-2">
            <li>
              <Link href="/" className="text-white">
                <FaHome size={27} />
              </Link>
            </li>

            <li>
              <Link href="/Games" className="text-white">
                <FaCar size={27} />
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:invisible lg:flex col-span-1 border-2 border-white self-stretch justify-center items-center "></div>
      </div>
    </>
  );
};

export default Navigation;
