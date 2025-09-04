"use client";
import Link from "next/link";
import React from "react";

const RootErrorPage = () => {
  return (
    <>
      <body className="mt-20 text-center flex justify-center align-middle relative min-h-[60vh] ">
        <div className=" bg-brandColor text-white  ">
          <h1 className="text-4xl text-white font-semibold underline underline-offset-8">Error Page</h1>
          <p className="text-lg my-8 mb-16">This is the custom Error Home Page</p>
          <Link className=" py-2 px-5 ring-1 ring-cyan-800 rounded-sm shadow-xl" href="/">
            Home Page
          </Link>
        </div>
      </body>
    </>
  );
};

export default RootErrorPage;
