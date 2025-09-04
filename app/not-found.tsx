"use client";
import React from "react";
import NotFoundImage from "@Public/404.svg";
import Image from "next/image";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import Link from "next/link";

const RootNotFoundPage = () => {
  return (
    <body className="">
      <section className="">
        <div className="h-[80vh] items-center  flex justify-center align-middle">
          <div className="border-0 border-green-400 m-auto text-white w-3/4 text-center">
            <h1 className="text-4xl text-white py-4 font-semibold underline underline-offset-8 italic">
              Page Not Found
            </h1>
            <p className="text-xl font-semibold text-white py-4">The page you were looking for doesnot exist.</p>
            <h4 className="text-2xl font-semibold  text-white py-4">Here are some helpfull links instead:</h4>
            <ol className=" p-3 my-9">
              <li className="list-inside list-none">
                <Link href="/" className="border border-slate-800 py-3 px-5 ring-1 ring-cyan-400 rounded-sm">
                  Home Page
                </Link>
              </li>
            </ol>
            <div className="border-0 flex gap-5 pl-8 justify-center mt-9">
              <FacebookMessengerShareButton
                appId=""
                url={process.env.HOME_PAGE_BASE_URL + "/404"}
                title="Page Not Found 404"
              >
                <FacebookIcon size={40} />
              </FacebookMessengerShareButton>
              <WhatsappShareButton url={process.env.HOME_PAGE_BASE_URL + "/404"} title="Page Not Found 404">
                <WhatsappIcon size={40} />
              </WhatsappShareButton>
              <TwitterShareButton url={process.env.HOME_PAGE_BASE_URL + "/404"} title="Page Not Found 404">
                <TwitterIcon size={40} />
              </TwitterShareButton>
              <LinkedinShareButton url={process.env.HOME_PAGE_BASE_URL + "/404"} title="Page Not Found 404">
                <LinkedinIcon size={40} />
              </LinkedinShareButton>
              <EmailShareButton url={process.env.HOME_PAGE_BASE_URL + "/404"} title="Page Not Found 404">
                <EmailIcon size={40} />
              </EmailShareButton>
            </div>
          </div>
        </div>
        {/* <div className="border-0 border-green-400 text-center m-auto p-2 md:order-2">
            <Image src={NotFoundImage} alt="not-found-svg" className="w-4/4 m-auto rounded-lg " />
          </div> */}
      </section>
    </body>
  );
};

export default RootNotFoundPage;
