"use client";
import Navigation from "Components/NavigationBar/Navigation";
import Footer from "Components/Footer/Footer";
import { AppProgressBar } from "next-nprogress-bar";
import ReadingProgressBar from "Components/UI/ReadingProgressBar/ReadingProgressBar";
import { GoogleAnalytics } from "@next/third-parties/google";

interface RootLayoutProps {
  children: React.ReactNode;
}

const HomePageLayout = (props: RootLayoutProps) => {
  return (
    <body className="relative p-0 m-0  prose prose-stone min-h-[65vh] max-w-full border-0 border-sky-400  h-full overflow-x-hidden bg-brandColor">
      <ReadingProgressBar />
      <AppProgressBar height="1px" color="#0f0617" options={{ showSpinner: true }} shallowRouting />
      <header>
        <Navigation />
      </header>
      <main className="border-0 border-red-900 grid grid-cols-12">
        <section className="hidden md:invisible md:block md:col-span-1 border-2 border-green-800">
          {/* First Section */}
        </section>
        <section className="col-span-12 md:col-span-10 border-0 border-red-500 m-auto w-full mb-32">
          <article>{props.children}</article>
        </section>
        <section className="hidden md:col-span-1 md:block md:invisible border border-slate-500">
          {/* Second Section */}
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
      {/* Adding Google Analytics Code Below */}
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_TAG!} />
    </body>
  );
};

export default HomePageLayout;
