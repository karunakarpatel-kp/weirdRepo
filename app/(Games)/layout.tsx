"use client";

import Navigation from "Components/NavigationBar/Navigation";
import Footer from "Components/Footer/Footer";
import { AppProgressBar } from "next-nprogress-bar";
import ReadingProgressBar from "Components/UI/ReadingProgressBar/ReadingProgressBar";
import { GoogleAnalytics } from "@next/third-parties/google";

interface RootLayoutProps {
  children: React.ReactNode;
}

const GamesPageLayout = (props: RootLayoutProps) => {
  return (
    <body className="relative p-0 m-0 bg-slate-900 prose prose-stone min-h-[65vh] max-w-full border-0 border-sky-400  h-full overflow-x-hidden">
      <ReadingProgressBar />
      <AppProgressBar height="1px" color="#ffffff" options={{ showSpinner: true }} shallowRouting />
      <header>
        <Navigation />
      </header>
      <main className="border-0 border-red-900 grid grid-cols-12 ">{props.children}</main>
      <footer>
        <Footer />
      </footer>
      {/* Adding Google Analytics Code Below */}
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
    </body>
  );
};

export default GamesPageLayout;
