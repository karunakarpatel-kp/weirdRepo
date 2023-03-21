import React, { useRef } from "react";

import { Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

import coding from "../../public/coding.jpg";
import Paragraph from "../../Components/Elements/Paragraph/Paragraph";
import Subtitle from "../../Components/Elements/Subtitle/Subtitle";
import FullPageBlogPostLayout from "../../Components/Layout/FullPageBlogPostLayout";
import HeaderImageFullBlogPost from "../../Components/UI/ImageCards/HeaderImageFullBlogPost";
import HeaderSection from "../../Components/SEO/Head";
import Scrollspy from "react-scrollspy";
import LastUpdateTags from "../../Components/UI/LastUpdate&Tags/LastUpdateTags";
import HeadingOne from "../../Components/Elements/Headings/HeadingOne";
import HeadingTwo from "../../Components/Elements/Headings/HeadingTwo";
import HeadingThree from "../../Components/Elements/Headings/HeadingThree";
import HeadingFour from "../../Components/Elements/Headings/HeadingFour";
import HeadingFive from "../../Components/Elements/Headings/HeadingFive";
import HeadingSix from "../../Components/Elements/Headings/HeadingSix";
import Link from "next/link";

export const TableOfContentsList = [
  { id: "1", title: "This Is One", targetElement: "lastItem" },
  { id: "2", title: "This Is Two", targetElement: "headingNumberOne" },
  { id: "3", title: "This Is Three", targetElement: "lastItem" },
];

export const ArticleDetailsList = [
  { id: "1", title: "Published By: Karunakar Patel" },
  { id: "2", title: "Last Updated On: Karunakar Patel" },
  { id: "3", title: "Read Time: 3mins" },
];

export const BlogPostTags = [{ id: "One" }];

const Seo = () => {
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
        title="SEO Page"
        description="This is the Description of the webpate"
        image="https://image-url"
        url="https://blog-page-url"
        publishedTime="2023-01-07T21:58:00+00:00"
        lastUpdatedTime="2023-01-07T21:58:00+00:00"
      />

      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>

      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title="How to Create a Multiselect Component with Material UI (MUI)" id="Heading Number One" />

          <Subtitle text="Learn how to create and customize a Multiselect component with Material UI and React By Karunakar Patel and he is making out this BlogPost...!" />

          <LastUpdateTags
            lastUpdatedTime="Jan 21, 2023"
            tags={[
              { tag: "seo", href: "/Blog/seo" },
              { tag: "material ui", href: "/mui" },
              { tag: "karunakar Patel", href: "/" },
            ]}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost image={coding} alt="Image Alt Text In Here..." />
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
          <Paragraph text="Multiselect in Material UI is an extended feature to the regular select or dropdown menu that enables users to select multiple values within the same input field." />
          <Paragraph text="MUI provides a couple of convenient options to get a feature-rich multiselect component included in our project." />
          <Paragraph text="In this tutorial, we’ll learn how to create a multiselect component using Select and Autocomplete with a customized menu list and removable tags/chips as values." />
          <Paragraph text="MUI provides a couple of convenient options to get a feature-rich multiselect component included in our project. lorem" />
          <Paragraph text="MUI provides a couple of convenient options to get a feature-rich multiselect component included in our project." />
          <Paragraph text="Multiselect in Material UI is an extended feature to the regular select or dropdown menu that enables users to select multiple values within the same input field." />
          <Paragraph text="Multiselect in Material UI is an extended feature to the regular select or dropdown menu that enables users to select multiple values within the same input field." />
          <HeadingTwo
            id="headingNumberOne"
            title="This is heading Number Two in this whole text field is some of the major fields in heading Number Two"
          />
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paragraph
                text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co "
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box minHeight={300} bgcolor="lightgrey"></Box>
            </Grid>
          </Grid>
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co "
          />
          <HeadingTwo
            id="one"
            title="One This is heading Number Three in this whole text field is some of the major fields in heading Number Two"
          />
          <Paragraph text="MUI provides a couple of convenient options to get a feature-rich multiselect component included in our project." />
          <Paragraph text="MUI provides a couple of convenient options to get a feature-rich multiselect component included in our project." />
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem "
          />
          <HeadingThree id="two" title="This is heading number three dude...!" />
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          co "
          />
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          co "
          />

          <HeadingFour title="Four Heading Labore expedita perspiciatis, amet, natus atque" />

          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          co "
          />
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          co "
          />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <HeadingFive title="Heading number five of the karunakar patel blog post." />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <HeadingSix title="This is the heading number six of the blog post idiot....!" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
        </Grid>

        <Grid item md={4} lg={4} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
          <Box position="sticky" top={70}>
            {/* <Stack direction="column" spacing={1}>
              <TableOfContents TableOfContentsList={TableOfContentsList} />
              <ArticleDetails ArticleDetailsList={ArticleDetailsList} />
            </Stack> */}
            <Box mb={1} pl={2}>
              <Typography variant="body2" fontSize="large">
                CONTENTS
              </Typography>
            </Box>
            <Box pl={2}>
              <Scrollspy
                items={["one", "two"]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#one" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#two" onClick={scrollIntoView} className="listItemLinkContent">
                    One of the Main Heading is Here...!
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#one" onClick={scrollIntoView} className="listItemLinkContent">
                    Learn How to set up Tailwind for React js{" "}
                  </a>
                  {/* Inner Container */}
                  <ol className="innerListItemContainer">
                    <li className="listItemContent">
                      <a href="#two" onClick={scrollIntoView} className="listItemLinkContent">
                        One of the Main Heading is Here...!
                      </a>
                    </li>

                    <li className="listItemContent">
                      <a href="#two" onClick={scrollIntoView} className="listItemLinkContent">
                        One of the Main Heading is Here...!
                      </a>
                    </li>
                  </ol>
                </li>
                <li className="listItemContent">
                  <a href="#two" onClick={scrollIntoView} className="listItemLinkContent">
                    One of the Main Heading is Here...!
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#two" onClick={scrollIntoView} className="listItemLinkContent">
                    Discussion
                  </a>
                </li>
              </Scrollspy>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Seo;

Seo.getLayout = function getLayout(page) {
  return (
    <>
      <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>
    </>
  );
};
