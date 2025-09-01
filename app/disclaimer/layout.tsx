import React from "react";
import { MdLightMode } from "react-icons/md";
import { FaArrowCircleUp } from "react-icons/fa";
import Link from "next/link";
import Sharing from "Components/SocialShare/Sharing";
import Navigation from "@Navigation/Navigation";
import { AppProgressBar } from "next-nprogress-bar";
import ReadingProgressBar from "Components/UI/ReadingProgressBar/ReadingProgressBar";
import Footer from "Components/Footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const DisclaimerPageLayout = (props: any) => {
  return (
    <>
      <body className="relative p-0 m-0  prose prose-stone min-h-[65vh] max-w-full border-0 border-sky-400  h-full overflow-x-hidden bg-brandColor text-white">
        <ReadingProgressBar />
        {/* <AppProgressBar height="1px" color="#ffffff" options={{ showSpinner: true }} shallowRouting /> */}
        <header>
          <Navigation />
        </header>
        <main className=" grid grid-cols-12">
          <section
            className="p-7 col-span-12 mt-20 mb-4 prose prose-lg prose-invert max-w-none w-3/6   m-auto min-h-[64vh]  prose-h1:leading-slug md:prose-img:h-[520px]  prose-img:rounded-lg "
            id="top"
          >
            {props.children}
          </section>
          <section className=" max-w-screen-lg m-auto ">{/* <Sharing /> */}</section>
          <section>
            <Link href="#top" className=" scroll-smooth ">
              <div className="darkMode fixed bottom-32 right-0 border bg-black text-white border-slate-700 p-2 pt-3 px-4 cursor-pointer rounded-s-2xl dark:bg-slate-900  dark:text-black shadow-inner z-50 scroll-smooth">
                <FaArrowCircleUp size={25} fill="white" className="animate-bounce" />
              </div>
            </Link>
          </section>
        </main>

        <footer>
          <Footer />
        </footer>
        {/* Adding Google Analytics Code Below */}
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
      </body>
    </>
  );
};

export default DisclaimerPageLayout;
