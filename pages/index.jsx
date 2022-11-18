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
        Title="Learn SEO Right From Start To Finish"
        Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus exercitationem doloremque,
            quam nemo nescifugiat aliquam! Distinctio doloribus possimus fugit perferendis fuga aliquam...."
        href="/"
        ImageSrc={coding}
        ImageAlt="Coding-Image"
      />

      <ImageOnLeftCard
        Title="Learn SEO Right From Start To Finish"
        Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus exercitationem doloremque,
            quam nemo nescifugiat aliquam! Distinctio doloribus possimus fugit perferendis fuga aliquam...."
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
