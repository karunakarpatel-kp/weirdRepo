import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GameCardProps {
  linkHref: string;
  linkTitle: string;
  imgSrc: string | any;
  imgAlt: string;
  gameTitle: string;
  scalVal?: number;
}

const GameCard = (props: GameCardProps) => {
  const { linkHref, linkTitle, imgSrc, imgAlt, gameTitle, scalVal } = props;
  return (
    <li className="border-0 border-green-400 group relative" key={new Date().getSeconds()}>
      <Link
        href={linkHref}
        className={`text-white block p-0 m-0  duration-300 ${scalVal ? `hover:scale-${scalVal}` : "hover:scale-110"}`}
        title={linkTitle}
      >
        <Image src={imgSrc} alt={imgAlt} className="p-0 m-0 rounded-2xl" />
        <h2 className="absolute bottom-0 right-0 left-0 cursor-pointer text-sm text-center font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          {gameTitle}
        </h2>
      </Link>
    </li>
  );
};

export default GameCard;
