import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import HeadingThree from "@Components/Elements/Headings/HeadingThree";
import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import { Paragraph as P, Paragraph } from "@Components/Elements/Paragraph/Paragraph";
import Subtitle from "@Components/Elements/Subtitle/Subtitle";
import FullPageBlogPostLayout from "@Components/Layout/FullPageBlogPostLayout";
import MainLayout from "@Components/Layout/MainLayout";
import HeaderSection from "@Components/SEO/Head";
import Sharing from "@Components/SocialShare/Sharing";
import { Ccode as C } from "@Components/SyntaxHighlighter/Ccode";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightTexts";
import SyntaxHighlight from "@Components/SyntaxHighlighter/SyntaxHighlight";
import HeaderImageFullBlogPost from "@Components/UI/ImageCards/HeaderImageFullBlogPost";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import Link from "next/link";
import { NextPageWithLayout } from "pages/_app";
import React from "react";
import Scrollspy from "react-scrollspy";

const InstallTailwindCSSNextjs: NextPageWithLayout = () => {
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
        title={SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.title}
        description={SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.description!}
        image={SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.featuredImage}
        url={SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.absoluteURL}
        publishedTime={SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.publishedTime}
        lastUpdatedTime={SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>
      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.title} id="title" />
          <Subtitle text={SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.lastUpdateTime)}
            tags={SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.featuredImage}
            alt={SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.featuredImageAltText}
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
          <Paragraph>
            In today’s ever-evolving web development landscape, it’s essential to stay up to date with the popular tools
            and frameworks, Among them,{" "}
            <Link href="https://tailwindcss.com/">
              <B>Tailwind CSS</B>
            </Link>{" "}
            has become one of the most popular with its <B>utility-first CSS frameworks</B>, giving developers a
            practical approach for styling their <B>Next.js</B>
            applications.
          </Paragraph>
          <Paragraph>
            If you’re looking to take your development to the next level, adding{" "}
            <Link href="https://tailwindcss.com/">
              <B>Tailwind CSS</B>
            </Link>{" "}
            to your next.js project is a great way to do it. Next.js is a well-known React framework for building
            server-rendered applications. In this article, we’ll show you{" "}
            <B>how to install Tailwind CSS into your next.js project</B>, so you can easily create beautiful user
            interfaces.
          </Paragraph>
          <Paragraph>To install Tailwind CSS in a Next.js project, you can follow these steps: </Paragraph>
          <HeadingTwo title="1. Create a Next.js Project:" id="create-nextjs-project" />
          <Paragraph>
            If you haven't already created a Next.js project, you can{" "}
            <Link href="https://www.karunakarpatel.com/Blog/nextjs_installation">
              {" "}
              <B>install a Next.js application</B>
            </Link>{" "}
            with dummy content by using the following command in your terminal:
          </Paragraph>
          <SyntaxHighlight>npx create-next-app my-next-app</SyntaxHighlight>
          <P>
            Replace <C>`my-next-app`</C> with the desired name of your project.
          </P>
          <HeadingTwo title="2. Install Tailwind CSS and Dependencies:" id="install-tailwind-css" />
          <P>
            Navigate to your project directory and <B>install Tailwind CSS</B> and its dependencies using npm or yarn.
            Run one of the following commands in your terminal:
          </P>
          <SyntaxHighlight>{`// Using npm: 
          npm install tailwindcss postcss autoprefixer`}</SyntaxHighlight>
          <SyntaxHighlight>{`// Using yarn: 
          yarn add tailwindcss postcss autoprefixer`}</SyntaxHighlight>

          <HeadingTwo title="3. Create Tailwind CSS Configuration File:" id="tailwind-css" />
          <P>
            Next, you need to create a <B>Tailwind CSS</B> configuration file. Run the following command in your
            terminal to generate a <C>`tailwind.config.js`</C> file:
          </P>
          <SyntaxHighlight>npx tailwindcss init</SyntaxHighlight>
          <P>This command will create a minimal `tailwind.config.js` file in your project directory.</P>
          <HeadingTwo title="4. Create PostCSS Configuration File:" id="create-postcss-configuration-file" />
          <P>
            Next.js uses <B>PostCSS</B> for processing CSS. Create a <C>`postcss.config.js`</C> file in your project
            directory if you don't have one already, and add the following content:
          </P>
          <SyntaxHighlight>
            {`module.exports = {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                },
              }
              `}
          </SyntaxHighlight>

          <HeadingTwo title="5. Import Tailwind CSS Styles:" id="import-tailwind-css-styles" />
          <P>
            In your project's main CSS file (usually <C>`styles/globals.css`</C> or <C>`styles/index.css`</C>), import
            <Link href="https://tailwindcss.com/">
              <B>Tailwind CSS</B>
            </Link>{" "}
            styles by adding the following line at the top:{" "}
          </P>

          <SyntaxHighlight>
            {` css 
            @import "tailwindcss/base"; 
            @import "tailwindcss/components"; 
            @import "tailwindcss/utilities"; `}
          </SyntaxHighlight>

          <HeadingTwo title="6. Configure Next.js to Support CSS:" id="configure-nextjs-css" />
          <P>
            Next.js requires a specific configuration to support CSS imports. In your <C>`next.config.js`</C> file, add
            the following configuration:
          </P>
          <SyntaxHighlight>
            {`const withCSS = require('@zeit/next-css') 
            module.exports = withCSS({/* config options here */})`}
          </SyntaxHighlight>
          <P>
            If you don't have a <C>`next.config.js`</C> file, create one in your project's root directory.
          </P>

          <HeadingTwo title="7. Start the Next.js Development Server:" id="start-nextjs-development-server" />
          <P>
            Finally, start the Next.js development server to see <B>Tailwind CSS</B> in action. Run the following
            command in your terminal:
          </P>
          <SyntaxHighlight>npm run dev</SyntaxHighlight>
          <SyntaxHighlight> yarn dev</SyntaxHighlight>
          <P>
            This will start the development server, and you can access your Next.js application at
            <C>`http://localhost:3000`</C>.
          </P>
          <P>
            That's it! You've successfully <B>installed</B> and <B>configured Tailwind CSS</B> in your Next.js project.
            You can now start using Tailwind utility classes to style your components and build beautiful UIs.
          </P>
          <HeadingTwo title="FAQs (Frequently Asked Questions)" id="faq" />

          <HeadingThree
            title="How can I verify if Tailwind CSS is installed correctly in my Next.js project?"
            id="tailwind-css-verify"
          />
          <P>
            To verify the successful installation of{" "}
            <Link href="https://tailwindcss.com/">
              <B>Tailwind CSS</B>
            </Link>{" "}
            in your{" "}
            <Link href="https://www.karunakarpatel.com/Blog/nextjs_installation">
              <B>Next.js</B>
            </Link>{" "}
            project, you can create a simple HTML file and apply Tailwind's utility classes to elements. Ensure that the
            styles are rendered as expected when you preview the HTML file in your browser.
          </P>

          <HeadingThree title="What are the benefits of using Tailwind CSS with Next.js?" id="benefit" />
          <P>
            <Link href="https://tailwindcss.com/">
              <B>Tailwind CSS</B>
            </Link>{" "}
            offers a utility-first approach to styling, allowing developers to create and develop robust designs
            professionally. When combined with Next.js, developers can power up the server-side rendering capabilities
            of Next.js alongside the flexibility and ease of use that were already provided by{" "}
            <Link href="https://tailwindcss.com/">
              <B>Tailwind CSS</B>
            </Link>
          </P>

          <HeadingThree title="Can I customize Tailwind CSS to match my project's design requirements?" id="" />
          <P>
            Yes,{" "}
            <Link href="https://tailwindcss.com/">
              <B>Tailwind CSS</B>
            </Link>{" "}
            provides wide-ranging customization options, allowing you to modify the framework to suit your project's
            specific design requirements. You can customize colors, typography, spacing, and more by modifying the
            <C>`tailwind.config.js`</C> file.{" "}
          </P>
          <HeadingThree title="Does Tailwind CSS affect the performance of Next.js applications?" id="three" />

          <P>
            <Link href="https://tailwindcss.com/">
              <B>Tailwind CSS</B>
            </Link>{" "}
            is designed to be highly optimized for production use, ensuring minimal impact on the performance of Next.js
            applications. By removing unwanted styles and optimizing the build process, Tailwind CSS maintains excellent
            performance features.
          </P>

          <HeadingThree title="Is Tailwind CSS suitable for responsive web design?" id="o" />
          <P>
            Yes,
            <Link href="https://tailwindcss.com/">
              <B>Tailwind CSS</B>
            </Link>
            excels in creating responsive web designs. With its in-built responsive design utilities, developers can
            easily create layouts that adapt seamlessly to different screen sizes and devices, enhancing the overall
            user experience.
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
                  "create-nextjs-project",
                  "install-tailwind-css",
                  "tailwind-css",
                  "create-postcss-configuration-file",
                  "import-tailwind-css-styles",
                  "configure-nextjs-css",
                  "start-nextjs-development-server",
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
                  <a href="#create-nextjs-project" onClick={scrollIntoView} className="listItemLinkContent">
                    1. Create A Next.Js Project:
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#install-tailwind-css" onClick={scrollIntoView} className="listItemLinkContent">
                    2. Install Tailwind CSS And Dependencies:
                  </a>
                </li>
                {/* Inner Container */}
                <li className="listItemContent ">
                  <a href="#tailwind-css" onClick={scrollIntoView} className="listItemLinkContent">
                    3. Create Tailwind CSS Configuration File:
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#create-postcss-configuration-file" onClick={scrollIntoView} className="listItemLinkContent">
                    4. Create PostCSS Configuration File:
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#import-tailwind-css-styles" onClick={scrollIntoView} className="listItemLinkContent">
                    5. Import Tailwind CSS Styles:
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#configure-nextjs-css" onClick={scrollIntoView} className="listItemLinkContent">
                    6. Configure Next.Js To Support CSS:
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#start-nextjs-development-server" onClick={scrollIntoView} className="listItemLinkContent">
                    7. Start The Next.Js Development Server:
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

export default InstallTailwindCSSNextjs;

InstallTailwindCSSNextjs.getLayout = function getLayout(page: ReactJSXElement) {
  return <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>;
};
