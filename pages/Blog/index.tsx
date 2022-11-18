import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import HeaderSection from "../../Components/SEO/Head";
import Typography from "@mui/material/Typography";

import seo from "../../public/seo.jpg";
import coding from "../../public/coding.jpg";
import ImageOnRightCard from "../../Components/UI/HomePageCards/ImageOnRightCard";
import ImageOnLeftCard from "../../Components/UI/HomePageCards/ImageOnLeftCard";
import RectangularAd from "../../Components/UI/Ads/RectangularAd";

const Blog = () => {
  return (
    <>
      <HeaderSection title="Blog Page" description="Description Goes Here for Blog Page...!" />
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

      <ImageOnRightCard
        Title="Learn SEO Right From Start To Finish"
        Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus exercitationem doloremque,
            quam nemo nescifugiat aliquam! Distinctio doloribus possimus fugit perferendis fuga aliquam...."
        href="/"
        ImageSrc={coding}
        ImageAlt="Coding-Image"
      />
      {/* <RectangularAd /> */}

      <ImageOnLeftCard
        Title="Learn SEO Right From Start To Finish"
        Description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, necessitatibus exercitationem doloremque,
            quam nemo nescifugiat aliquam! Distinctio doloribus possimus fugit perferendis fuga aliquam...."
        href="/Blog/seo"
        ImageSrc={seo}
        ImageAlt="SEO-Image"
      />
    </>
  );
};

export default Blog;

Blog.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};
