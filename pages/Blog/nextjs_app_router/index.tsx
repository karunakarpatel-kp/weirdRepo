import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import { Paragraph as P } from "@Components/Elements/Paragraph/Paragraph";
import Subtitle from "@Components/Elements/Subtitle/Subtitle";
import FullPageBlogPostLayout from "@Components/Layout/FullPageBlogPostLayout";
import MainLayout from "@Components/Layout/MainLayout";
import HeaderSection from "@Components/SEO/Head";
import Sharing from "@Components/SocialShare/Sharing";
import HeaderImageFullBlogPost from "@Components/UI/ImageCards/HeaderImageFullBlogPost";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightTexts";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import { Ccode as C } from "@Components/SyntaxHighlighter/Ccode";
import Link from "next/link";
import { NextPageWithLayout } from "pages/_app";
import React from "react";
import Scrollspy from "react-scrollspy";
import HeadingThree from "@Components/Elements/Headings/HeadingThree";
import SyntaxHighlight from "@Components/SyntaxHighlighter/SyntaxHighlight";

const NextjsAppRouter: NextPageWithLayout = () => {
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
        title={SEO_OBJ.NEXTJS_APP_ROUTER.title}
        description={SEO_OBJ.NEXTJS_APP_ROUTER.description!}
        image={SEO_OBJ.NEXTJS_APP_ROUTER.featuredImage}
        url={SEO_OBJ.NEXTJS_APP_ROUTER.absoluteURL}
        publishedTime={SEO_OBJ.NEXTJS_APP_ROUTER.publishedTime}
        lastUpdatedTime={SEO_OBJ.NEXTJS_APP_ROUTER.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>
      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.NEXTJS_APP_ROUTER.title} id="title" />
          <Subtitle text={SEO_OBJ.NEXTJS_APP_ROUTER.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.NEXTJS_APP_ROUTER.lastUpdateTime)}
            tags={SEO_OBJ.NEXTJS_APP_ROUTER.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.NEXTJS_APP_ROUTER.featuredImage}
            alt={SEO_OBJ.NEXTJS_APP_ROUTER.featuredImageAltText}
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
          <HeadingTwo title="Introduction" id="introduction-to-nextjs-app-router" />
          <P>
            In the scope of web development these days,{" "}
            <Link href="https://nextjs.org/docs/app">Next.js App Router</Link>, is a powerful feature that simplifies
            routing in Next.js applications. In this comprehensive guide, we'll dig into the ins and outs of{" "}
            <B>Next.js App Router</B>, exploring its features, benefits, and best practices for implementation and use
            in your projects.
          </P>
          <HeadingTwo title="Understanding Next.js App Router" id="understanding-nextjs-app-router" />
          <P>
            <Link href="https://nextjs.org/docs/app">
              <B>Next.js App Router</B>
            </Link>{" "}
            is a fundamental component of Next.js. The <B>Next.js App router</B> enables navigation between different
            pages within a Next.js application, offering a continuous browsing experience for users. Unlike traditional
            routing solutions, Next.js App Router controls the framework's server-side rendering capabilities, resulting
            in faster page loads and improved SEO.
          </P>

          <HeadingTwo title="Key Features of Next.js App Router" id="key-features-nextjs-app-router" />
          <P>
            Here are the most important features of <B>Next.js App Router</B> and its examples below.
          </P>

          <HeadingThree title="Dynamic Routing:" id="dynamic-routing" />
          <P>
            Next.js App Router supports <B>dynamic route parameters</B>, allowing developers to create flexible and
            dynamic page layouts.
          </P>

          <HeadingThree title="Automatic Code Splitting: " id="automatic-code-splitting" />
          <P>
            With Next.js, <B>code splitting</B> is automatic, ensuring that only the necessary JavaScript is loaded for
            each page, leading to faster load times.
          </P>
          <HeadingThree title="Prefetching: " id="prefetching" />
          <P>
            The router intelligently prefetches resources for linked pages, preemptively loading assets to minimize
            latency and improve perceived performance.
          </P>
          <HeadingThree title="Client-Side Routing:" id="client-side-routing" />
          <P>
            While Next.js excels in{" "}
            <Link href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#server-side-validation-and-error-handling">
              server-side rendering
            </Link>
            , it also offers robust client-side routing capabilities, providing a seamless transition between
            server-rendered and client-rendered pages.
          </P>

          <HeadingTwo title="Implementing Next.js App Router" id="implementing-nextjs-app-router" />
          <P>
            Now that we've explored the features of{" "}
            <Link href="https://nextjs.org/docs/app">
              <B>Next.js App Router</B>
            </Link>{" "}
            , let's explore into its implementation. Integrating the router into your Next.js project is
            straightforward. Below, we'll outline the steps to get started with Next.js App Router
          </P>
          <HeadingTwo title="Installation:" id="installtion" />
          <P>
            Begin by <Link href="https://www.karunakarpatel.com/Blog/nextjs_installation">installing Next.js</Link> if
            you haven't already done so. Next, ensure that you're using at least version 12.0 or higher, as the App
            Router is included by default.
          </P>

          <HeadingTwo title="Defining Routes: " id="defining-routes" />
          <P>
            Define the routes for your application by creating pages within the <C>`pages`</C> directory. Each
            JavaScript file in this directory automatically becomes a route.{" "}
          </P>
          <SyntaxHighlight>
            {`// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
`}
          </SyntaxHighlight>
          <HeadingTwo title="Navigating Between Pages:" id="navigating-between-pages" />
          <P>
            Use the <C>`Link`</C> component from <C>`next/link`</C> to enable client-side navigation between pages.
            Simply wrap your anchor tags with <C>`Link`</C> for seamless routing.
          </P>
          <SyntaxHighlight>
            {`// pages/index.js
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
}
`}
          </SyntaxHighlight>
          <HeadingTwo title=" Dynamic Routes: " id="dynamic-routes" />
          <P>
            To create dynamic routes with
            <Link href="https://nextjs.org/docs/app">
              <B>Next.js App Router</B>
            </Link>{" "}
            , make use of the bracket syntax <C>(`[]`)</C> to specify dynamic segments in your route paths.
          </P>
          <SyntaxHighlight>
            {`// pages/post/[id].js
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Post {id}</h1>
    </div>
  );
}
`}
          </SyntaxHighlight>

          <HeadingTwo title="Programmatic Navigation: " id="programatic-navigation" />
          <P>
            <Link href="https://nextjs.org/docs/app">
              <B>Next.js App Router</B>
            </Link>{" "}
            also supports programmatic navigation, allowing you to navigate between pages programmatically using the{" "}
            <C>`Router`</C> object from <C>`next/router`</C>.
          </P>
          <SyntaxHighlight>
            {`// pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleClick}>Go to About Page</button>
    </div>
  );
}
`}
          </SyntaxHighlight>

          <HeadingTwo title="Optimizing Performance with Next.js App Router" id="optimizing-performance" />
          <P>
            In addition to simplifying routing,{" "}
            <Link href="https://nextjs.org/docs/app">
              <B>Next.js App Router</B>
            </Link>{" "}
            plays an important role in optimizing the performance of your applications. By leveraging server-side
            rendering and automatic code splitting, Next.js minimizes time to the first byte (TTFB) and reduces the
            overall bundle size, resulting in lightning-fast load times.
          </P>

          <HeadingThree title="Avoid Nesting Routes: " id="avoid-nesting-routes" />
          <P>
            <B>Nesting routes</B> too deeply can lead to complexity and maintainability. Whenever possible, keep your
            route structure flat and intuitive.
          </P>

          <HeadingThree title="Use Prefetching Carefully:" id="use-prefetching" />
          <P>
            While prefetching can enhance performance, excessive prefetching can lead to unnecessary resource
            consumption. Use prefetching strategically for critical navigation paths.
          </P>
          <HeadingThree title="Optimize Route Loading: " id="optimizing-route-loading" />
          <P>
            Take advantage of <B>Next.js' built-in optimizations</B>, such as route-level code splitting and incremental
            static regeneration, to further optimize route loading times.
          </P>

          <HeadingTwo title="Next.js App Router: Boosting the Developer Experience" id="developer-experience" />
          <P>
            In conclusion,{" "}
            <Link href="https://nextjs.org/docs/app">
              <B>Next.js App Router</B>
            </Link>{" "}
            stands as proof of the persistent activity of efficiency and performance in web development. By simplifying
            routing and optimizing performance, Next.js inspires developers to create blazing-fast web applications with
            ease. Whether you're building a simple portfolio site or a complex web application,{" "}
            <B>Next.js App Router</B> is a valuable tool in your collection.
          </P>
          <HeadingTwo title="FAQs (Frequently Asked Questions)" id="faq" />

          <HeadingThree title="What is Next.js App Router?" id="" />
          <P>
            <B>Next.js App Router</B> is a routing solution for Next.js applications, offering seamless navigation
            between pages while optimizing performance through server-side rendering and automatic code splitting.
          </P>
          <HeadingThree title="How does Next.js App Router improve performance?" id="" />
          <P>
            Next.js App Router improves performance by leveraging <B>server-side rendering</B>, automatic code
            splitting, and prefetching, resulting in faster page loads and improved user experience.
          </P>
          <HeadingThree title="Can I use dynamic routes with Next.js App Router?" id="" />
          <P>
            Yes, Next.js App Router supports dynamic routes, allowing developers to create flexible and dynamic page
            layouts using bracket syntax <C>(`[]`)</C> for route parameters.
          </P>
          <HeadingThree title="Is Next.js App Router suitable for large-scale applications?" id="" />
          <P>
            Absolutely! <B>Next.js App Router</B> is highly scalable and can be used for projects of any size, from
            simple websites to complex web applications with thousands of routes.
          </P>
          <HeadingThree title="Does Next.js App Router support client-side routing?" id="" />
          <P>
            Yes,{" "}
            <Link href="https://nextjs.org/docs/app">
              <B>Next.js App Router</B>
            </Link>{" "}
            offers robust client-side routing capabilities, seamlessly transitioning between server-rendered and
            client-rendered pages for a fluid browsing experience.
          </P>
          <HeadingThree title="How can I optimize route loading with Next.js App Router?" id="" />
          <P>
            To optimize route loading, leverage <B>Next.js</B> built-in optimizations such as route-level code splitting
            and incremental static regeneration, and avoid nesting routes too deeply.
          </P>
          <HeadingTwo title="Conclusion" id="conclusion" />
          <P>
            In summary,{" "}
            <Link href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#server-side-validation-and-error-handlingr">
              <B>Next.js App Router</B>
            </Link>{" "}
            is a game-changer for web developers seeking to optimize efficiency and performance in their applications.
            By simplifying routing and offering powerful performance optimizations, Next.js empowers developers to
            deliver unparalleled user experiences. Whether you're a seasoned developer or just starting,{" "}
            <B>Next.js App Router</B> is a must-have tool in your toolkit.
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
                  "introduction-to-nextjs-app-router",
                  "understanding-nextjs-app-router",
                  "key-features-nextjs-app-router",
                  "dynamic-routing",
                  "automatic-code-splitting",
                  "prefetching",
                  "client-side-routing",
                  "implementing-nextjs-app-router",
                  "installtion",
                  "defining-routes",
                  "navigating-between-pages",
                  "dynamic-routes",
                  "programatic-navigation",
                  "optimizing-performance",
                  "avoid-nesting-routes",
                  "use-prefetching",
                  "optimizing-route-loading",
                  "developer-experience",
                  "faq",
                ]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#introduction-to-nextjs-app-router" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction to Next.js App Router
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#understanding-nextjs-app-router" onClick={scrollIntoView} className="listItemLinkContent">
                    Understanding Next.Js App Router
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#key-features-nextjs-app-router" onClick={scrollIntoView} className="listItemLinkContent">
                    Key Features Of Next.Js App Router
                  </a>
                </li>
                {/* Inner Container */}
                <li className="listItemContent inside_ele">
                  <a href="#dynamic-routing" onClick={scrollIntoView} className="listItemLinkContent">
                    Dynamic Routing:
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#automatic-code-splitting" onClick={scrollIntoView} className="listItemLinkContent">
                    Automatic Code Splitting:
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#prefetching" onClick={scrollIntoView} className="listItemLinkContent">
                    Prefetching:
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#client-side-routing" onClick={scrollIntoView} className="listItemLinkContent">
                    Client-Side Routing:
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#implementing-nextjs-app-router" onClick={scrollIntoView} className="listItemLinkContent">
                    Implementing Next.Js App Router
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#installtion" onClick={scrollIntoView} className="listItemLinkContent">
                    Installtion
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#defining-routes" onClick={scrollIntoView} className="listItemLinkContent">
                    Defining Routes:
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#navigating-between-pages" onClick={scrollIntoView} className="listItemLinkContent">
                    Navigating between pages
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#dynamic-routes" onClick={scrollIntoView} className="listItemLinkContent">
                    Dynamic Routes:
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#programatic-navigation" onClick={scrollIntoView} className="listItemLinkContent">
                    Programmatic Navigation:
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#optimizing-performance" onClick={scrollIntoView} className="listItemLinkContent">
                    Optimizing Performance With Next.Js App Router
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#avoid-nesting-routes" onClick={scrollIntoView} className="listItemLinkContent">
                    Avoid Nesting Routes:
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#use-prefetching" onClick={scrollIntoView} className="listItemLinkContent">
                    Use Prefetching Carefully:
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#optimizing-route-loading" onClick={scrollIntoView} className="listItemLinkContent">
                    Optimize Route Loading:
                  </a>
                </li>

                <li className="listItemContent">
                  <a href="#developer-experience" onClick={scrollIntoView} className="listItemLinkContent">
                    Next.Js App Router: Boosting The Developer Experience
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

export default NextjsAppRouter;

NextjsAppRouter.getLayout = function getLayout(page: ReactJSXElement) {
  return <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>;
};
