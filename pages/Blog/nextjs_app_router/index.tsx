import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import Paragraph from "@Components/Elements/Paragraph/Paragraph";
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
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore hic tenetur, eaque dolor dignissimos
            error, nihil consequuntur ducimus consequatur earum explicabo harum dicta praesentium ratione deserunt
            corrupti dolore magni voluptatibus quibusdam cupiditate perspiciatis! Ipsa veniam dolorum eum debitis
            laboriosam cupiditate!
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
                  "what_is_next.js",
                  "install_next.js",
                  "automatic_installation_of_next.js",
                  "manual_installation_of_next.js",
                  "create_app_directory",
                  "run_the_development_server_of_next.js",
                  "frequently_asked_questions",
                  "discussions",
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
                  <a href="#what_is_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    What is Next.js?
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#install_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    Install Next.js
                  </a>
                </li>
                {/* Inner Container */}
                <li className="listItemContent inside_ele">
                  <a href="#automatic_installation_of_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    Automatic installation of Next.js
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#manual_installation_of_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    Manual installation of Next.js
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#create_app_directory" onClick={scrollIntoView} className="listItemLinkContent">
                    Create App Directory
                  </a>
                </li>
                <li className="listItemContent">
                  <a
                    href="#run_the_development_server_of_next.js"
                    onClick={scrollIntoView}
                    className="listItemLinkContent"
                  >
                    Run the development server
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#frequently_asked_questions" onClick={scrollIntoView} className="listItemLinkContent">
                    Frequently Asked Questions
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#discussions" onClick={scrollIntoView} className="listItemLinkContent">
                    Discussions
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
