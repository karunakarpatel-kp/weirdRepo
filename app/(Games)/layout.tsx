"use client";

import Navigation from "Components/NavigationBar/Navigation";
import Footer from "Components/Footer/Footer";
import { AppProgressBar } from "next-nprogress-bar";
import ReadingProgressBar from "Components/UI/ReadingProgressBar/ReadingProgressBar";
import { GoogleAnalytics } from "@next/third-parties/google";
import ProgressBar from "Components/ProgressBar/ProgressBar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const GamesPageLayout = (props: RootLayoutProps) => {
  return (
    <body className="relative p-0 m-0 bg-brandColor prose prose-stone min-h-[65vh] max-w-full border-0 border-sky-400  h-full overflow-x-hidden">
      <ReadingProgressBar />
      <ProgressBar />
      <header>
        <Navigation />
      </header>
      <main className="border-0 border-red-900  ">{props.children}</main>
      <footer>
        <Footer />
      </footer>
      {/* Adding Google Analytics Code Below */}
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
    </body>
  );
};

export default GamesPageLayout;
