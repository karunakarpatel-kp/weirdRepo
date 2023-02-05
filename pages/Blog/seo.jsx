import React from "react";

import { Accordion, AccordionDetails, AccordionSummary, Divider, Fab, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import coding from "../../public/coding.jpg";
import Paragraph from "../../Components/Elements/Paragraph/Paragraph";
import Heading from "../../Components/Elements/Headings/Heading";
import Subtitle from "../../Components/Elements/Subtitle/Subtitle";
import FullPageBlogPostLayout from "../../Components/Layout/FullPageBlogPostLayout";
import HeaderImageFullBlogPost from "../../Components/UI/ImageCards/HeaderImageFullBlogPost";
import TableOfContents from "../../Components/UI/TableOfContents/TableOfContents";
import ArticleDetails from "../../Components/UI/ArticleDetails/ArticleDetails";
import HeaderSection from "../../Components/SEO/Head";

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

const Seo = () => {
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

      <Box m="auto" mb={5}>
        <Heading
          title="This is title lorem  in which one of the best qualities of the life which is heading number one"
          variant="h1"
        />

        <Stack direction="row" display="flex">
          <Subtitle text="Last Modified at Jan 01 2023" mr={2} />
          <Box flexGrow={1}></Box>
          <Subtitle text="By: Karunakar Patel" />
        </Stack>

        {/* Image For Desktop Screens */}
        <HeaderImageFullBlogPost image={coding} alt="Image Alt Text In Here..." />

        <Stack direction="row" spacing={1}>
          <TableOfContents TableOfContentsList={TableOfContentsList} />
          <ArticleDetails ArticleDetailsList={ArticleDetailsList} />
        </Stack>

        <Box pl={0} pr={0}>
          <Paragraph text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed consectetur repudiandae voluptatem similique " />

          <Paragraph text="In this paragraphy text you will learn how to save the editable fields of car details to the state and more over make previous year claims to editable fields and save it in a a state." />

          <Paragraph text="In this paragraphy text you will learn how to save the editable fields of car details to the state and more over make previous year claims to editable fields and save it in a a state." />

          <Paragraph text="In this par sdf sdfl fdsk fdlkfj l skdfou sldfou flsdfj sd agraphy text you will learn how to save the editable fields of car details to the state and more over make previous year claims to editable fields and save it in a a state." />

          <Heading
            variant="h2"
            id="headingNumberOne"
            title="This is heading Number Two in this whole text field is some of the major fields in heading Number Two"
          />

          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co "
          />

          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co "
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

          <Heading
            variant="h3"
            title="This is heading Number Three in this whole text field is some of the major fields in heading Number Two"
          />

          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co "
          />

          <Paragraph
            id="lastItem"
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co"
          />

          <Heading
            variant="h4"
            title="This is heading Number Four in this whole text field is some of the major fields in heading Number Two"
          />
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co"
          />
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co"
          />

          <Heading
            variant="h5"
            title="This is heading Number Five in this whole text field is some of the major fields in heading Number Two"
          />

          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co"
          />

          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co"
          />

          <Heading
            variant="h5"
            title="This is heading Number Five in this whole text field is some of the major fields in heading Number Two"
          />

          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co"
          />
        </Box>
      </Box>
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
