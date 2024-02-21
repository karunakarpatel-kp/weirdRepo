import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import { Paragraph as P } from "@Components/Elements/Paragraph/Paragraph";
import { Ccode as C } from "@Components/SyntaxHighlighter/Ccode";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightTexts";
import Subtitle from "@Components/Elements/Subtitle/Subtitle";
import FullPageBlogPostLayout from "@Components/Layout/FullPageBlogPostLayout";
import MainLayout from "@Components/Layout/MainLayout";
import HeaderSection from "@Components/SEO/Head";
import Sharing from "@Components/SocialShare/Sharing";
import HeaderImageFullBlogPost from "@Components/UI/ImageCards/HeaderImageFullBlogPost";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import { NextPageWithLayout } from "pages/_app";
import React from "react";
import Scrollspy from "react-scrollspy";
import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import Link from "next/link";
import SyntaxHighlight from "@Components/SyntaxHighlighter/SyntaxHighlight";
import HeadingThree from "@Components/Elements/Headings/HeadingThree";

const NextjsSEO: NextPageWithLayout = () => {
  const scrollIntoView = () => {
    window.scrollTo({
      top: 0,
      left: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <HeaderSection
        title={SEO_OBJ.NEXTJS_SEO.title}
        description={SEO_OBJ.NEXTJS_SEO.description!}
        image={SEO_OBJ.NEXTJS_SEO.featuredImage}
        url={SEO_OBJ.NEXTJS_SEO.absoluteURL}
        publishedTime={SEO_OBJ.NEXTJS_SEO.publishedTime}
        lastUpdatedTime={SEO_OBJ.NEXTJS_SEO.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>
      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.NEXTJS_SEO.title} id="title" />
          <Subtitle text={SEO_OBJ.NEXTJS_SEO.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.NEXTJS_SEO.lastUpdateTime)}
            tags={SEO_OBJ.NEXTJS_SEO.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.NEXTJS_SEO.featuredImage}
            alt={SEO_OBJ.NEXTJS_SEO.featuredImageAltText}
          />
        </Grid>
        <Grid item md={2} lg={4}>
          {/* Empty Space */}
        </Grid>
      </Grid>

      <Divider sx={{ mt: 4, mb: 4 }} />

      <Grid
        container
        direction="row"
        spacing={3}
        sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
      >
        <Grid item md={8} lg={8}>
          {/* Content Goes Here...! */}

          <HeadingTwo title="Introduction" id="introduction" />
          <P>
            <Link href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide#:~:text=SEO%E2%80%94short%20for%20search%20engine,site%20through%20a%20search%20engine.">
              Search Engine Optimization (SEO)
            </Link>{" "}
            plays an important role in driving organic traffic to your website and increasing its visibility in search
            engine results. With Next.js, a popular React framework for building web applications, you have powerful
            tool to optimize your website for SEO. In this article, we'll explore advanced <B>SEO techniques</B> and
            best practices specifically adapted for Next.js websites, helping you improve your website's search engine
            rankings and attract more visitors.
          </P>
          <HeadingTwo title="1. Optimize Metadata" id="optimize-metadata" />
          <P>
            Metadata plays a crucial role in SEO, providing search engines with information about your website's
            content. In <B>Next.js</B>, you can optimize metadata using the <C>`Head`</C> component to add meta tags,
            titles, and descriptions to your pages.
          </P>
          <SyntaxHighlight>
            {`
import Head from 'next/head';
const Home = () => (
  <>
    <Head>
      <title>Next.js SEO Guide</title>
      <meta name="description" content="Learn advanced SEO techniques for optimizing Next.js websites." />
    </Head>
    {/* Your content here */}
  </>
);
export default Home;
`}
          </SyntaxHighlight>

          <HeadingTwo title="2. Improve Site Structure" id="improve-site-structure" />
          <P>
            A well-structured website not only enhances user experience but also makes it easier for search engines to
            <B>crawl</B> and index your content. In Next.js, you can improve site structure by organizing pages
            logically and using meaningful URLs.
          </P>
          <SyntaxHighlight>
            {`jsx
// pages/products/[category]/[product].js

const ProductPage = ({ category, product }) => (
  <div>
    <h1>{product} in {category}</h1>
    {/* Product details */}
  </div>
);
export default ProductPage;
`}
          </SyntaxHighlight>

          <HeadingTwo title="3. Leverage Next.js Features" id="nextjs-features" />
          <P>
            Next.js offers features that can directly impact SEO, such as{" "}
            <Link href="https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering">
              server-side rendering (SSR)
            </Link>
            ,{" "}
            <Link href="https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation">
              static site generation (SSG)
            </Link>
            , and automatic code splitting. By implementing these features, you can improve page load times, enhance
            user experience, and boost <B>search engine rankings</B>.
          </P>
          <SyntaxHighlight>
            {`
// pages/index.js
const HomePage = ({ data }) => (
  <div>
    {/* Render dynamic content */}
  </div>
);

export async function getStaticProps() {
  // Fetch data for static rendering
  return {
    props: {
      data: /* fetched data */,
    },
  };
}
export default HomePage;
`}
          </SyntaxHighlight>

          <HeadingTwo title="4. Submit Sitemap to Search Engines" id="submit-sitemap-to-search-engines" />
          <P>
            A sitemap is a file that lists all the pages on your website, helping search engines discover and index your
            content more efficiently. In Next.js, you can generate a sitemap using third-party packages and submit it to
            search engines like <B>Google</B> and <B>Bing</B> through their webmaster tools.
          </P>
          <SyntaxHighlight>
            {` // using npm
npm install --save next-sitemap

// next.config.js
module.exports = {
  siteUrl: 'https://example.com',
  generateRobotsTxt: true,
};
`}
          </SyntaxHighlight>
          <HeadingTwo title="Conclusion" id="conclusion" />
          <P>
            By implementing these advanced SEO techniques and best practices in your Next.js website, you can enhance
            its visibility in search engine results and attract more organic traffic. From optimizing metadata to
            improving site structure and using these <B>Next.js features</B>, there are many strategies you can employ
            to improve your website's <B>SEO</B> and drive sustainable growth.
          </P>
          <HeadingTwo title="FAQs (Frequently Asked Questions)" id="faq" />

          <HeadingThree title="How does Next.js impact SEO?" id="" />
          <P>
            Next.js offers features like <B>server-side rendering (SSR)</B>, static site generation (SSG), and automatic
            code splitting, which can improve SEO by enhancing page load times, user experience, and search engine
            crawlability.
          </P>
          <HeadingThree title="What are some common SEO downsides to avoid in Next.js?" id="" />
          <P>
            Common SEO drawbacks in Next.js include neglecting metadata optimization, ignoring site structure, failing
            to learn and implement Next.js features like <B>SSR</B> and <B>SSG</B>, and overlooking technical SEO
            aspects such as sitemap generation and canonical URLs.
          </P>
          <HeadingThree title="Can I use third-party SEO tools with Next.js?" id="" />
          <P>
            Yes, you can use third-party SEO tools and services with Next.js to further optimize your{" "}
            <B>website's SEO</B>. Many SEO tools offer integrations or APIs that can be easily integrated into Next.js
            applications.
          </P>
          <HeadingThree title="Is it necessary to submit a sitemap to search engines for Next.js websites?" id="" />
          <P>
            While not strictly necessary, <B>submitting a sitemap to search engines</B> can help them discover and index
            your content more efficiently, especially for larger or dynamically generated websites. It's a recommended
            practice for improving SEO.
          </P>
          <HeadingThree title="How can I monitor the SEO performance of my Next.js website?" id="" />
          <P>
            You can monitor the SEO performance of your Next.js website using various tools and analytics platforms,
            such as <B>Google Analytics</B>, <B>Google Search Console</B>, and third-party SEO monitoring tools. These
            tools provide insights into traffic, rankings, and user behavior.
          </P>
        </Grid>
        <Grid item md={4} lg={4} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
          <Box position="sticky" top={70}>
            <Box mb={1} pl={2}>
              <Typography variant="body2" fontSize="large">
                CONTENTS
              </Typography>
            </Box>
            <Box pl={2}>
              <Scrollspy
                items={[
                  "introduction",
                  "optimize-metadata",
                  "improve-site-structure",
                  "nextjs-features",
                  "submit-sitemap-to-search-engines",
                  "conclusion",
                  "faq",
                ]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#introduction" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#optimize-metadata" onClick={scrollIntoView} className="listItemLinkContent">
                    1. Optimize Metadata
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#improve-site-structure" onClick={scrollIntoView} className="listItemLinkContent">
                    2. Improve Site Structure
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#nextjs-features" onClick={scrollIntoView} className="listItemLinkContent">
                    3. Leverage Next.Js Features
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#submit-sitemap-to-search-engines" onClick={scrollIntoView} className="listItemLinkContent">
                    4. Submit Sitemap To Search Engines
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#conclusion" onClick={scrollIntoView} className="listItemLinkContent">
                    Conclusion
                  </a>
                </li>

                <li className="listItemContent">
                  <a href="#faq" onClick={scrollIntoView} className="listItemLinkContent">
                    Frequently Asked Questions
                  </a>
                </li>
              </Scrollspy>

              {/* Social Sharing Icons Are below */}
              <Box>
                <Sharing />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default NextjsSEO;

NextjsSEO.getLayout = function getLayout(page: ReactJSXElement) {
  return <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>;
};
