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

const NextjsRouter: NextPageWithLayout = () => {
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
        title={SEO_OBJ.NEXTJS_ROUTER.title}
        description={SEO_OBJ.NEXTJS_ROUTER.description!}
        image={SEO_OBJ.NEXTJS_ROUTER.featuredImage}
        url={SEO_OBJ.NEXTJS_ROUTER.absoluteURL}
        publishedTime={SEO_OBJ.NEXTJS_ROUTER.publishedTime}
        lastUpdatedTime={SEO_OBJ.NEXTJS_ROUTER.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>
      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.NEXTJS_ROUTER.title} id="title" />
          <Subtitle text={SEO_OBJ.NEXTJS_ROUTER.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.NEXTJS_ROUTER.lastUpdateTime)}
            tags={SEO_OBJ.NEXTJS_ROUTER.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.NEXTJS_ROUTER.featuredImage}
            alt={SEO_OBJ.NEXTJS_ROUTER.featuredImageAltText}
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
          <HeadingTwo id="introduction" title="Introduction" />
          <Paragraph>
            <Link href="https://nextjs.org/docs">
              <B>Next.js</B>
            </Link>
            , a popular React framework, comes with its built-in routing system known as the Next.js Router. Routing is
            a fundamental aspect of web development, allowing users to navigate between different pages within a web
            application seamlessly. In this comprehensive guide, we'll explore the{" "}
            <Link href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration">
              Next.js Router{" "}
            </Link>
            , its features, and how to power it effectively in your Next.js projects.
          </Paragraph>
          <HeadingTwo title="Understanding Next.js Router" id="understianding-nextjs" />
          <Paragraph>
            The{" "}
            <Link href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration">
              <B>Next.js Router</B>
            </Link>{" "}
            is based on the <B>`react-router`</B> library and provides a simple and natural way to handle client-side
            routing in Next.js applications. It allows developers to define routes and map them to specific components,
            enabling dynamic page navigation without the need for page refreshes.
          </Paragraph>
          <HeadingTwo title="Key Features of Next.js Router" id="key-features-nextjs-router" />

          <HeadingThree title="1. File-based Routing" id="file-based-routing" />
          <Paragraph>
            Next.js follows a <B>file-based</B> routing approach, where each page of the application corresponds to a
            specific file within the project structure. By organizing pages in this manner, developers can create clean
            and intuitive route definitions without the need for complex patterns. The project structure eventually
            becomes a route for that particular component automatically.
          </Paragraph>
          <HeadingThree title="2. Dynamic Routing" id="dynamic-routing" />
          <Paragraph>
            <Link href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration">
              <B>Next.js Router</B>
            </Link>{" "}
            supports dynamic routing, allowing for the creation of dynamic routes with parameters. Parameters can be
            specified within the route definition using square brackets (<C>`[]`</C>), enabling the creation of flexible
            and <B>dynamic page layouts</B> based on user input or data from external sources.
          </Paragraph>
          <HeadingThree title="3. Nested Routing" id="nested-routing" />
          <Paragraph>
            <B> Next.js Router</B> also supports nested routing, allowing developers to define nested routes within the
            project structure. This feature is particularly useful for building complex applications with categorized
            page structures, such as dashboards, real-time wizards, or multi-level navigation systems.
          </Paragraph>
          <HeadingThree title="4. Route Prefetching" id="route-prefetching" />
          <Paragraph>
            <B> Next.js Router</B> automatically prefetches linked pages in the background, improving the overall
            performance of the application by preloading resources for the following navigation on the server itself.
            This helps reduce latency and ensures a smoother user experience, especially for applications with
            multi-level pages.
          </Paragraph>
          <HeadingThree title="5. Programmatic Routing" id="programmatic-routing" />
          <Paragraph>
            In addition to declarative routing using <C>Link</C> components, Next.js Router also supports programmatic
            routing using the <B>`useRouter`</B> hook or the <B>`router`</B> object. This allows developers to navigate
            between pages programmatically in response to user actions or application events, giving them powdered
            control over the navigation flow of the whole application.
          </Paragraph>

          <HeadingTwo title="Getting Started with Next.js Router" id="getting-started" />

          <HeadingThree title="1. Creating Pages" id="creating-pages" />
          <Paragraph>
            To define routes in a Next.js application, create <C>`.js`</C> or <C>`.jsx`</C> files within the `pages`
            directory. Each file represents a unique page in the application, and the file name corresponds to the route
            path. For example, <C>`pages/about.js`</C> would create a route for the <C>`/about`</C> page.{" "}
          </Paragraph>
          <HeadingThree title="2. Linking Pages" id="linking-pages" />
          <Paragraph>
            To create links between pages, use the <C>&lt;Link&gt;</C> component provided by{" "}
            <Link href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration">
              <B>Next.js Router</B>
            </Link>{" "}
            . Simply wrap the anchor (<C>&lt;a&gt;</C>) tag around the desired content and specify the <C>`href`</C>{" "}
            attribute with the target route. For example:{" "}
          </Paragraph>

          <SyntaxHighlight>
            {`
import Link from 'next/link';

const MyComponent = () => (
  <Link href="/about">
    <a>About Us</a>
  </Link>
);
`}
          </SyntaxHighlight>

          <HeadingThree title="3. Dynamic Routing" id="dynamic-routing2" />
          <Paragraph>
            For dynamic routes with parameters, define the route using square brackets (`[]`) in the file name. Inside
            the component, access the route parameters using the <C>`useRouter`</C> hook or the <C>`router`</C> object
            provided by Next.js. For example:
          </Paragraph>

          <SyntaxHighlight>{`
// pages/posts/[id].js
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  
  return <h1>Post ID: {id}</h1>;
};

export default Post;
`}</SyntaxHighlight>

          <HeadingTwo title="Conclusion" id="conclusion" />

          <Paragraph>
            The <B>Next.js Router</B> provides a powerful and intuitive way to handle client-side routing in Next.js
            applications. With features like <B>file-based routing</B>, <B>dynamic routing</B>, and{" "}
            <B>route prefetching</B>, developers can create fast, dynamic, and{" "}
            <Link href="https://www.karunakarpatel.com/Blog/nextjs_seo">SEO-friendly</Link> web applications with ease.
            By understanding the key concepts and best practices of <B>Next.js Router</B>, you can leverage its
            capabilities to build robust and user-friendly web experiences for your users.{" "}
          </Paragraph>

          <HeadingTwo title="FAQs (Frequently Asked Questions)" id="faq" />

          <HeadingThree title="Can I use Next.js Router with non-Next.js projects?" id="" />
          <Paragraph>
            <B>Next.js Router</B>, is specifically designed for Next.js applications and depends on the Next.js
            framework. While some concepts may apply to other React projects, the routing implementation is strongly
            integrated with Next.js.
          </Paragraph>
          <HeadingThree title="Does Next.js Router support server-side rendering?" id="" />
          <Paragraph>
            Yes, Next.js Router supports both <B>client-side</B> and <B>server-side rendering</B>. Pages can be
            pre-rendered on the server and served as static HTML or rendered dynamically on the client, depending on the
            configuration.
          </Paragraph>
          <HeadingThree title="How does Next.js Router handle route transitions?" id="" />
          <Paragraph>
            <B>Next.js Router</B>, provides built-in support for route transitions, allowing for smooth page transitions
            between different routes. Transition effects can be customized using CSS or third-party animation libraries.
            You can also add a third-party loading screen you can that I have already been using on this website.
          </Paragraph>
          <HeadingThree title="Can I customize the URL structure in Next.js Router?" id="" />
          <Paragraph>
            Yes, <B>Next.js Router</B> allows for flexible URL structures using dynamic routing and nested routes.
            Developers can define custom route patterns and parameters to match specific URL patterns and requirements.
          </Paragraph>
          <HeadingThree title="Is Next.js Router suitable for large-scale applications?" id="" />
          <Paragraph>
            Yes, the <B>Next.js Router</B> is suitable for both small-scale and large-scale applications. Its efficient
            routing implementation, along with features like route prefetching and dynamic routing, make it well-suited
            for projects of any size and complexity.
          </Paragraph>
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
                  "understianding-nextjs",
                  "key-features-nextjs-router",
                  "file-based-routing",
                  "dynamic-routing",
                  "nested-routing",
                  "route-prefetching",
                  "programmatic-routing",
                  "getting-started",
                  "creating-pages",
                  "linking-pages",
                  "dynamic-routing2",
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
                  <a href="#understianding-nextjs" onClick={scrollIntoView} className="listItemLinkContent">
                    Understanding Next.Js Router
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#key-features-nextjs-router" onClick={scrollIntoView} className="listItemLinkContent">
                    Key Features Of Next.Js Router
                  </a>
                </li>
                {/* Inner Container */}
                <li className="listItemContent inside_ele">
                  <a href="#file-based-routing" onClick={scrollIntoView} className="listItemLinkContent">
                    1. File-Based Routing
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#dynamic-routing" onClick={scrollIntoView} className="listItemLinkContent">
                    2. Dynamic Routing
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#nested-routing" onClick={scrollIntoView} className="listItemLinkContent">
                    3. Nested Routing
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#route-prefetching" onClick={scrollIntoView} className="listItemLinkContent">
                    4. Route Prefetching
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#programmatic-routing" onClick={scrollIntoView} className="listItemLinkContent">
                    5. Programmatic Routing
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#getting-started" onClick={scrollIntoView} className="listItemLinkContent">
                    Getting Started With Next.Js Router
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#creating-pages" onClick={scrollIntoView} className="listItemLinkContent">
                    1. Creating Pages
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#linking-pages" onClick={scrollIntoView} className="listItemLinkContent">
                    2. Linking Pages
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#dynamic-routing2" onClick={scrollIntoView} className="listItemLinkContent">
                    3. Dynamic Routing
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
                {/* <li className="listItemContent">
                  <a href="#discussions" onClick={scrollIntoView} className="listItemLinkContent">
                    Discussions
                  </a>
                </li> */}
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

export default NextjsRouter;

NextjsRouter.getLayout = function getLayout(page: ReactJSXElement) {
  return <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>;
};
