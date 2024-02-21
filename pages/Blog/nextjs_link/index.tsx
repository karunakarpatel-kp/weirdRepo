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
import { Box, Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import { NextPageWithLayout } from "pages/_app";
import React from "react";
import Scrollspy from "react-scrollspy";
import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import Link from "next/link";
import SyntaxHighlight from "@Components/SyntaxHighlighter/SyntaxHighlight";
import HeadingThree from "@Components/Elements/Headings/HeadingThree";

const NextjsLink: NextPageWithLayout = () => {
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
        title={SEO_OBJ.NEXTJS_LINK.title}
        description={SEO_OBJ.NEXTJS_LINK.description!}
        image={SEO_OBJ.NEXTJS_LINK.featuredImage}
        url={SEO_OBJ.NEXTJS_LINK.absoluteURL}
        publishedTime={SEO_OBJ.NEXTJS_LINK.publishedTime}
        lastUpdatedTime={SEO_OBJ.NEXTJS_LINK.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>
      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.NEXTJS_LINK.title} id="title" />
          <Subtitle text={SEO_OBJ.NEXTJS_LINK.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.NEXTJS_LINK.lastUpdateTime)}
            tags={SEO_OBJ.NEXTJS_LINK.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.NEXTJS_LINK.featuredImage}
            alt={SEO_OBJ.NEXTJS_LINK.featuredImageAltText}
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

          <HeadingTwo title="Introduction to Next.js Link" id="introduction-to-nextjs-link" />
          <P>
            <B>Next.js</B> offers powerful features for building fast, dynamic web applications, and In those
            applications, Navigation is a key to delivering a smooth user experience. The Link component in Next.js
            provides a simple and efficient way to handle client-side routing, enabling developers to create navigation
            links. In this article, we'll explore how to leverage the{" "}
            <Link href="https://nextjs.org/docs/pages/api-reference/components/link">Next.js Link component</Link> to
            enhance navigation in your applications and provide a seamless browsing and routing experience.
          </P>
          <HeadingTwo title="Understanding Next.js Link Component" id="understanding-nextjs-link" />

          <P>
            The <B>Link component in Next.js</B> allows developers to create client-side navigation links that preserve
            the state of the React components. It utilizes the <B>HTML5 pushState API</B> to navigate between pages
            without a full page reload, resulting in faster navigation and improved performance.
          </P>

          <HeadingTwo title="Benefits of Next.js Link Component" id="benefit-nextjs-link" />
          <P>Using the Link component in Next.js offers several benefits:</P>
          <List>
            <ListItem>
              <ListItemText>
                <P>
                  <B>Client-Side Routing</B>: Next.js Link enables client-side routing, allowing for smoother and faster
                  navigation between pages.
                </P>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <P>
                  <B>Prefetching</B>: Next.js automatically prefetches linked pages in the background, reducing loading
                  times for subsequent navigations.
                </P>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <P>
                  <B>State Preservation</B>: The Link component preserves the state of React components during
                  navigation, maintaining the user's current context and scroll position.
                </P>
              </ListItemText>
            </ListItem>
          </List>

          <HeadingTwo title="Using Next.js Link Component" id="using-nextjs-link" />
          <P>Let's explore how to use the Link component in Next.js:</P>
          <SyntaxHighlight>
            {`
import Link from 'next/link';
const Navigation = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </nav>
);
export default Navigation;
`}
          </SyntaxHighlight>

          <HeadingTwo title="Prefetching with Next.js Link" id="prefetching-nextjs-link" />
          <P>
            Next.js automatically prefetches linked pages when using the <B>Link component</B>, improving the
            performance of your application. To disable prefetching for specific links, you can use the prefetch
            attribute as given below.
          </P>
          <SyntaxHighlight>
            {`
<Link href="/blog" prefetch={false}>
  <a>Blog</a>
</Link>
`}
          </SyntaxHighlight>

          <HeadingTwo title="Customizing Link Behavior" id="link-behaviour" />
          <P>
            The Link component in <B>Next.js</B> allows for customization of link behavior using various props, such as
            replacing the current URL, scrolling to the top of the page on navigation, and passing query parameters:
          </P>
          <SyntaxHighlight>
            {`
<Link href="/posts/[id]" as="/posts/1" replace scroll={true}>
  <a>View Post</a>
</Link>
`}
          </SyntaxHighlight>
          <HeadingTwo title="Conclusion" id="conclusion" />
          <P>
            The <B>Next.js Link component</B> provides a powerful and intuitive way to handle client-side navigation in
            your web applications. By leveraging the Link component, you can create fast, responsive navigation links
            that enhance the user experience and improve the overall performance of your Next.js applications.
          </P>
          <HeadingTwo title="FAQs (Frequently Asked Questions)" id="faq" />

          <HeadingThree title="How does the Next.js Link component improve performance?" id="" />
          <P>
            The <B>Next.js Link</B> component enables client-side routing, allowing for faster navigation between pages
            without a full page reload. Additionally, Next.js automatically prefetches linked pages in the background,
            reducing loading times for succeeding navigations.
          </P>
          <HeadingThree title="Can I customize the behavior of Next.js Link components?" id="" />
          <P>
            Yes, the <B>Next.js Link</B> component offers various props for customizing link behavior, such as
            prefetching, replacing the current URL, scrolling to the top of the page on navigation, and passing query
            parameters.
          </P>

          <HeadingThree title="Does Next.js Link handle Navigation state preservation?" id="" />
          <P>
            Yes, the <B>Next.js Link</B> component preserves the state of React components during navigation,
            maintaining the user's current context and scroll position across pages.
          </P>
          <HeadingThree title="Is Next.js Link suitable for large-scale web applications?" id="" />
          <P>
            <B>Next.js Link</B> is well-suited for large-scale web applications, offering efficient client-side routing
            and prefetching capabilities that provide a unified browsing experience for users.
          </P>
          <HeadingThree title="How does prefetching work with Next.js Link?" id="" />
          <P>
            <B>Next.js </B> automatically prefetches linked pages in the background when using the Link component,
            predicting user navigation and reducing loading times for following page visits.
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
                  "introduction-to-nextjs-link",
                  "understanding-nextjs-link",
                  "benefit-nextjs-link",
                  "using-nextjs-link",
                  "prefetching-nextjs-link",
                  "link-behaviour",
                  "conclusion",
                  "faq",
                ]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#introduction-to-nextjs-link" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction To Next.Js Link
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#understanding-nextjs-link" onClick={scrollIntoView} className="listItemLinkContent">
                    Understanding Next.Js Link Component
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#benefit-nextjs-link" onClick={scrollIntoView} className="listItemLinkContent">
                    Benefits Of Next.Js Link Component
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#using-nextjs-link" onClick={scrollIntoView} className="listItemLinkContent">
                    Using Next.Js Link Component
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#prefetching-nextjs-link" onClick={scrollIntoView} className="listItemLinkContent">
                    Prefetching With Next.Js Link
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

export default NextjsLink;

NextjsLink.getLayout = function getLayout(page: ReactJSXElement) {
  return <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>;
};
