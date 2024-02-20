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

const GoogleAnalyticsInNextjs: NextPageWithLayout = () => {
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
        title={SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.title}
        description={SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.description!}
        image={SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.featuredImage}
        url={SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.absoluteURL}
        publishedTime={SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.publishedTime}
        lastUpdatedTime={SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>
      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.title} id="title" />
          <Subtitle text={SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.lastUpdateTime)}
            tags={SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.featuredImage}
            alt={SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.featuredImageAltText}
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
            Google Analytics is a powerful tool for tracking website traffic, analyzing user behavior, and measuring the
            effectiveness of your marketing struggles. Integrating Google Analytics with your Next.js application allows
            you to monitor key metrics, such as page views, user engagement, and conversion rates, providing valuable
            insights into your website's performance. In this article, we'll walk you through the process of setting up
            and integrating <Link href="https://developers.google.com/analytics">Google Analytics</Link> with your
            Next.js application, step by step.
          </P>

          <HeadingTwo title="Step 1: Create a Google Analytics Account" id="create-google-analytics" />
          <P>
            If you don't already have a <B>Google Analytics account</B>, you'll need to create one by visiting the
            <Link href="https://marketingplatform.google.com/about/analytics/"> Google Analytics website</Link> and
            signing up for an account. Once you've created an account, you'll be prompted to set up a new property for
            your website.
          </P>
          <HeadingTwo title="Step 2: Obtain the Tracking ID" id="obtain-tracking-id" />
          <P>
            After creating a property for your website, you'll be provided with a <B>tracking ID</B>. This tracking ID
            is a unique identifier that you'll need to <B>integrate Google Analytics with your Next.js application</B>.
            Copy the tracking ID for later use.
          </P>
          <HeadingTwo title="Step 3: Install the Google Analytics Package" id="install-google-analytics" />
          <P>
            Next, you'll need to install the <C>`react-ga`</C> package, which is a JavaScript library for integrating
            Google Analytics with React applications. You can install the package using npm or yarn:
          </P>
          <SyntaxHighlight>{`npm install react-ga`}</SyntaxHighlight>
          <SyntaxHighlight>{`yarn add react-ga`}</SyntaxHighlight>

          <HeadingTwo title="Step 4: Initialize Google Analytics" id="initialize-google-analytics" />
          <P>
            In your Next.js application, create a new file named <C>`analytics.js`</C> (or any other name you prefer) in
            the <C>`utils`</C> directory. In this file, initialize Google Analytics with your tracking ID:
          </P>
          <SyntaxHighlight>
            {`
// utils/analytics.js
import ReactGA from 'react-ga';
export const initGA = () => {
  ReactGA.initialize('YOUR_TRACKING_ID');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
`}
          </SyntaxHighlight>

          <HeadingTwo title="Step 5: Integrate Google Analytics with Next.js" id="integrate-google-analytics" />
          <P>
            Next, you'll need to <B>integrate Google Analytics</B> with your Next.js application by using the{" "}
            <C>`useEffect`</C> hook to initialize Google Analytics when the component mounts and track page views:
          </P>
          <SyntaxHighlight>
            {`
// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initGA, logPageView } from '../utils/analytics';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    router.events.on('routeChangeComplete', logPageView);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
`}
          </SyntaxHighlight>

          <HeadingTwo title="Step 6: Verify Google Analytics Integration" id="verify-google-analytics-integration" />
          <P>
            Finally, verify that <Link href="https://developers.google.com/analytics">Google Analytics</Link> is
            correctly integrated with your Next.js application by visiting your website and navigating to the Real-Time
            section in your Google Analytics dashboard. You should see active users and pageviews in real time,
            indicating that <Link href="https://developers.google.com/analytics">Google Analytics</Link> is tracking
            your website traffic.
          </P>
          <HeadingTwo title="Conclusion" id="conclusion" />
          <P>
            <B>Integrating Google Analytics</B> with your <B>Next.js application</B> allows you to track and analyze
            user behavior, monitor website performance, and make data-driven decisions to optimize your website. By
            following the steps outlined in this blog post, you can set up{" "}
            <Link href="https://developers.google.com/analytics">Google Analytics</Link> in your Next.js application
            quickly and easily, gaining valuable insights into your website's performance.
          </P>

          <HeadingTwo title="FAQs (Frequently Asked Questions)" id="faq" />

          <HeadingThree title=" How can I track custom events with Google Analytics in Next.js?" id="" />
          <P>
            You can track custom events with{" "}
            <Link href="https://developers.google.com/analytics">Google Analytics in Next.js</Link> by using the
            <C>`react-ga`</C> library to send event data to Google Analytics. Simply use the <C>`ReactGA.event`</C>{" "}
            method to send custom event data with specific category, action, label, and value parameters.
          </P>
          <HeadingThree
            title="Can I track user interactions with specific components in Next.js using Google Analytics?"
            id=""
          />
          <P>
            Yes, you can track user interactions with specific components in Next.js using Google Analytics by adding
            event listeners to those components and sending event data to Google Analytics using the <C>`react-ga`</C>{" "}
            library whenever an interaction occurs.
          </P>
          <HeadingThree
            title="Is it possible to exclude certain pages from being tracked by Google Analytics in Next.js?"
            id=""
          />
          <P>
            Yes, you can exclude certain pages from being tracked by{" "}
            <Link href="https://developers.google.com/analytics">Google Analytics</Link> in Next.js by conditionally
            initializing Google Analytics and logging page views only for the pages you want to track.{" "}
          </P>
          <HeadingThree title="How can I view and analyze website traffic data in Google Analytics?" id="" />
          <P>
            You can view and analyze <B>website traffic data</B> in <B>Google Analytics</B> by logging in to your Google
            Analytics account and navigating to the reporting section. From there, you can access various reports, such
            as Audience, Acquisition, Behavior, and Conversion reports, to gain insights into your website's traffic and
            user behavior.
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
                  "create-google-analytics",
                  "obtain-tracking-id",
                  "install-google-analytics",
                  "initialize-google-analytics",
                  "integrate-google-analytics",
                  "verify-google-analytics-integration",
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
                  <a href="#create-google-analytics" onClick={scrollIntoView} className="listItemLinkContent">
                    Step 1: Create A Google Analytics Account
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#obtain-tracking-id" onClick={scrollIntoView} className="listItemLinkContent">
                    Step 2: Obtain The Tracking ID
                  </a>
                </li>
                {/* Inner Container */}
                <li className="listItemContent ">
                  <a href="#install-google-analytics" onClick={scrollIntoView} className="listItemLinkContent">
                    Step 3: Install The Google Analytics Package
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#initialize-google-analytics" onClick={scrollIntoView} className="listItemLinkContent">
                    Step 4: Initialize Google Analytics
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#integrate-google-analytics" onClick={scrollIntoView} className="listItemLinkContent">
                    Step 5: Integrate Google Analytics With Next.Js
                  </a>
                </li>
                <li className="listItemContent">
                  <a
                    href="#verify-google-analytics-integration"
                    onClick={scrollIntoView}
                    className="listItemLinkContent"
                  >
                    Step 6: Verify Google Analytics Integration
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

export default GoogleAnalyticsInNextjs;

GoogleAnalyticsInNextjs.getLayout = function getLayout(page: ReactJSXElement) {
  return <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>;
};
