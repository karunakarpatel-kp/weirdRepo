import MainLayout from "../Components/Layout/MainLayout";
import seo from "../public/seo.jpg";
import coding from "../public/coding.jpg";
import ImageOnRightCard from "../Components/UI/HomePageCards/ImageOnRightCard";

import ImageOnLeftCard from "../Components/UI/HomePageCards/ImageOnLeftCard";
import RectangularAd from "../Components/UI/Ads/RectangularAd";

const Home = () => {
  return (
    <>
      <ImageOnRightCard
        Title="Learn SEO Right From Start To Finish Image On Right Side"
        Description="In this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World World.....!"
        href="/"
        ImageSrc={coding}
        ImageAlt="Coding-Image"
      />

      <ImageOnLeftCard
        Title="Learn SEO Right From Start To Finish By Image on Left"
        Description="In this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World World.....!"
        href="/Blog/seo"
        ImageSrc={seo}
        ImageAlt="SEO-Image"
      />

      {/* <RectangularAd /> */}
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
