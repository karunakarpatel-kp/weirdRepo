import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import { Paragraph as P } from "@Components/Elements/Paragraph/Paragraph";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightTexts";
import { Ccode as C } from "@Components/SyntaxHighlighter/Ccode";
import Subtitle from "@Components/Elements/Subtitle/Subtitle";
import FullPageBlogPostLayout from "@Components/Layout/FullPageBlogPostLayout";
import MainLayout from "@Components/Layout/MainLayout";
import HeaderSection from "@Components/SEO/Head";
import Sharing from "@Components/SocialShare/Sharing";
import HeaderImageFullBlogPost from "@Components/UI/ImageCards/HeaderImageFullBlogPost";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import { NextPageWithLayout } from "pages/_app";
import React from "react";
import Scrollspy from "react-scrollspy";
import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import Link from "next/link";
import SyntaxHighlight from "@Components/SyntaxHighlighter/SyntaxHighlight";
import HeadingThree from "@Components/Elements/Headings/HeadingThree";

const NextjsConfig: NextPageWithLayout = () => {
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
        title={SEO_OBJ.NEXTJS_CONFIG.title}
        description={SEO_OBJ.NEXTJS_CONFIG.description!}
        image={SEO_OBJ.NEXTJS_CONFIG.featuredImage}
        url={SEO_OBJ.NEXTJS_CONFIG.absoluteURL}
        publishedTime={SEO_OBJ.NEXTJS_CONFIG.publishedTime}
        lastUpdatedTime={SEO_OBJ.NEXTJS_CONFIG.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>
      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.NEXTJS_CONFIG.title} id="title" />
          <Subtitle text={SEO_OBJ.NEXTJS_CONFIG.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.NEXTJS_CONFIG.lastUpdateTime)}
            tags={SEO_OBJ.NEXTJS_CONFIG.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.NEXTJS_CONFIG.featuredImage}
            alt={SEO_OBJ.NEXTJS_CONFIG.featuredImageAltText}
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

          <HeadingTwo title="Introduction to Next.js Config" id="introduction-nextjs-config" />
          <P>
            Configuring Next.js is essential for tailoring your development environment to suit your project's
            requirements. The Next.js configuration file allows developers to customize various aspects of their Next.js
            applications, from asset optimization to server-side rendering settings. In this article, we'll explore the{" "}
            <Link href="https://nextjs.org/docs/pages/building-your-application/configuring">
              Next.js configuration file
            </Link>{" "}
            in detail, covering essential configurations and advanced customization techniques to help you optimize your
            Next.js projects.
          </P>
          <HeadingTwo title="Understanding the Next.js Configuration File" id="understanding-nextjs-config-file" />
          <P>
            The Next.js configuration file, <C>`next.config.js`</C>, is a JavaScript file that exports a configuration
            object containing various options and settings for your Next.js application. This file allows you to
            override default Next.js configurations and customize your application's behavior according to your needs.
          </P>
          <HeadingTwo title="Essential Next.js Configuration Options" id="nextjs-config-options" />
          <P>
            Let's take a look at some of the necessary configuration options available in the{" "}
            <B>Next.js configuration file:</B>
          </P>

          <List>
            <ListItem>
              <ListItemText>
                <P>
                  1.<C>`target`</C>: This Specifies the target environment for your Next.js application, such as server
                  or serverless.
                </P>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <P>
                  2. <C>`webpack`</C>: This Allows for customizing webpack configurations by providing a function that
                  receives the webpack configuration object.
                </P>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <P>
                  3. <C>`env`</C>: This Enables you to define environment variables that are accessible in both
                  client-side and server-side code.
                </P>
              </ListItemText>
            </ListItem>
          </List>

          <HeadingTwo title="Advanced Next.js Configuration Techniques" id="advanced-nextjs-config-options" />
          <P>
            In addition to the essential <B>configuration options</B>, Next.js offers advanced customization techniques
            for fine-tuning your application
          </P>
          <List>
            <ListItem>
              <ListItemText>
                <P>
                  <B>1. Customizing Babel Configuration</B>: You can customize Babel configurations by providing a{" "}
                  <C>`babel`</C> key in the <C>`next.config.js`</C> file and modifying Babel presets and plugins.
                </P>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <P>
                  <B>2. Optimizing Assets</B>: Next.js allows for optimizing assets, such as images and fonts, by
                  configuring asset optimization options like <C>`images`</C>, <C>`fonts``</C>, and{" "}
                  <C>`experimental.optimizeCss``</C>.
                </P>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <P>
                  <B>3. Server-Side Rendering (SSR) Configuration</B>: You can configure server-side rendering settings,
                  such as customizing headers and modifying the behavior of the server-side rendering process.
                </P>
              </ListItemText>
            </ListItem>
          </List>

          <HeadingTwo title="Creating the Next.js Configuration File" id="creating-nextjs-config-file" />
          <P>
            To create a <C>`next.config.js`</C> file for your Next.js application, simply create a new file in the root
            directory of your project and export a configuration object with the desired options:
          </P>
          <SyntaxHighlight>
            {`
// next.config.js
module.exports = {
  target: 'serverless',
  webpack: (config, { isServer }) => {
    // Custom webpack configurations
    return config;
  },
  env: {
    API_URL: process.env.API_URL,
  },
};
`}
          </SyntaxHighlight>
          <HeadingTwo title="Conclusion" id="conclusion" />
          <P>
            The{" "}
            <Link href="https://nextjs.org/docs/pages/building-your-application/configuring">
              Next.js configuration file
            </Link>{" "}
            is a powerful tool for customizing and <B>configuring your Next.js applications</B>. By understanding and
            using this various configuration options available, you can optimize your Next.js projects for performance,
            scalability, and developer productivity.
          </P>
          <HeadingTwo title="FAQs (Frequently Asked Questions)" id="faq" />

          <HeadingThree title="What is the purpose of the Next.js configuration file?" id="" />
          <P>
            The Next.js configuration file <C>(`next.config.js`)</C> allows developers to customize various aspects of
            their Next.js applications, including webpack configurations, environment variables, asset optimization, and
            server-side rendering settings.
          </P>
          <HeadingThree title="Can I customize webpack configurations in Next.js?" id="" />
          <P>
            Yes, Next.js allows for customizing webpack configurations by providing a function in the{" "}
            <C>`next.config.js`</C>
            file that receives the webpack configuration object and returns a modified configuration.
          </P>
          <HeadingThree title="How do I define environment variables in Next.js?" id="" />
          <P>
            You can define environment variables in Next.js by using the <C>`env`</C> key in the <C>`next.config.js`</C>{" "}
            file and specifying key-value pairs for the variables you want to define.
          </P>
          <HeadingThree title="What are some advanced Next.js configuration techniques?" id="" />
          <P>
            <B>Advanced Next.js configuration techniques</B> include customizing Babel configurations, optimizing assets
            like images and fonts, and configuring server-side rendering settings for fine-tuning performance and
            behavior.
          </P>
          <HeadingThree title="Is the Next.js configuration file required in every Next.js project?" id="" />
          <P>
            No, the Next.js configuration file <B>(`next.config.js`)</B> is optional and only necessary if you need to
            customize or override default configurations for your Next.js application.
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
                  "introduction-nextjs-config",
                  "understanding-nextjs-config-file",
                  "nextjs-config-options",
                  "advanced-nextjs-config-options",
                  "creating-nextjs-config-file",
                  "conclusion",
                  "faq",
                ]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#introduction-nextjs-config" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction To Next.Js Config
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#understanding-nextjs-config-file" onClick={scrollIntoView} className="listItemLinkContent">
                    Understanding The Next.Js Configuration File
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#nextjs-config-options" onClick={scrollIntoView} className="listItemLinkContent">
                    Essential Next.Js Configuration Options
                  </a>
                </li>
                {/* Inner Container */}
                <li className="listItemContent ">
                  <a href="#advanced-nextjs-config-options" onClick={scrollIntoView} className="listItemLinkContent">
                    Advanced Next.Js Configuration Techniques
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#creating-nextjs-config-file" onClick={scrollIntoView} className="listItemLinkContent">
                    Creating The Next.Js Configuration File
                  </a>
                </li>
                <li className="listItemContent">
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

export default NextjsConfig;

NextjsConfig.getLayout = function getLayout(page: ReactJSXElement) {
  return <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>;
};
