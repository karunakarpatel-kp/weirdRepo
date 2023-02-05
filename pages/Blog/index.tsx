import React from "react";
import MainLayout from "../../Components/Layout/MainLayout";
import HeaderSection from "../../Components/SEO/Head";

import seo from "../../public/seo.jpg";
import coding from "../../public/coding.jpg";
import ImageOnRightCard from "../../Components/UI/HomePageCards/ImageOnRightCard";
import ImageOnLeftCard from "../../Components/UI/HomePageCards/ImageOnLeftCard";

const Blog = () => {
  return (
    <>
      <HeaderSection
        title="Blog Page"
        description="This is the Description of the Blog Page"
        image="https://image-url"
        url="https://blog-page-url"
        publishedTime="2023-01-07T21:58:00+00:00"
        lastUpdatedTime="2023-01-07T21:58:00+00:00"
      />

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
