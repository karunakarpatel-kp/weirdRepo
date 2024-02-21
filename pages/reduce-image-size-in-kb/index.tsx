import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, Stack, ThemeProvider, Typography } from "@mui/material";

import HeaderSection from "@SEO/Head";
import Theme, { themeColors } from "@Theme/Theme";
import { NextPageWithLayout } from "pages/_app";
import { DateMonthYearForBlogPost, SEO_OBJ, blogPostsObj } from "Essentials";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import { Paragraph as P } from "@Components/Elements/Paragraph/Paragraph";
import DownloadPlugin from "@Components/YTDownloader/DownloadPlugin";
import Footer from "@Components/UI/Footer";
import Navigation from "@Components/UI/Navigation";
import Sharing from "@Components/SocialShare/Sharing";
import { useSelector } from "react-redux";
import { RootState } from "store/centralStore";
import DialogContainer from "@Components/UI/Dialogs/DialogContainer";
import ModalContainer from "@Components/UI/Modals/ModalContainer";
import Image from "next/image";
import WelcomeSVG from "@Public/welcome.svg";
import UploadImg from "@Components/ImgCompress/UploadImg";
import PreviewImage from "@Components/ImgCompress/PreviewImage";
import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import ReduceImageSizeInKbContent from "@Components/Content/ReduceImageSizeInKbContent";

const ReduceImageSizeInKB: NextPageWithLayout = () => {
  const getCentralFile = useSelector((state: RootState) => state.imgReducerSlice.file);
  return (
    <>
      <ThemeProvider theme={Theme}>
        <HeaderSection
          title={SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.title}
          description={SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.description!}
          image={SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.ogImageURL}
          url={SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.absoluteURL}
          publishedTime={SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.publishedTime}
          lastUpdatedTime={SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.lastUpdateTime}
        />
        <Navigation />
        <Grid container direction="row" spacing={0} mt={8} border={0}>
          <Box
            sx={{
              border: "1",
              backgroundColor: "primary.main",
              p: 3,
              textAlign: "center",
              position: "relative",
              width: "100%",
            }}
          >
            <Typography
              variant="blogPostBrandTitle"
              sx={{ mb: { xs: 2, sm: 2, md: 3, lg: 3, color: "white" } }}
              id="title"
            >
              {SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.title}
            </Typography>
            <Box
              margin="auto"
              border={0}
              borderColor="white"
              sx={{ width: { xs: 5 / 5, sm: 5 / 5, md: 3 / 5, lg: 3 / 5 } }}
            >
              <Typography variant="blogPostBrandSubheading" mb={6} mt={5}>
                {SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.description}
              </Typography>
              <LastUpdateTags
                lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.lastUpdateTime)}
                tags={SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.tags!}
              />
              {/* <DownloadPlugin /> */}
              <UploadImg />
            </Box>
          </Box>
          <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
            {/* Extra Space On The Left Side */}
          </Grid>

          <Grid item xs={12} sm={11} md={10} lg={9} minHeight="100vh">
            {getCentralFile.fileURL === null && (
              <Grid
                container
                direction="column"
                border={0}
                mt={2}
                component={Paper}
                elevation={0}
                // sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
                minHeight={400}
                p={5}
                textAlign="center"
              >
                <Box margin="auto" mb={2}>
                  <Image src={WelcomeSVG} width={300} height={300} alt="Hi" />
                </Box>
                <P>Please upload any image to start compressing</P>
              </Grid>
            )}

            {getCentralFile.fileURL !== null && <PreviewImage />}
            {/* Center Content */}

            <ReduceImageSizeInKbContent />

            {/* Sharing Icon Container In Below */}
            <Grid
              container
              direction="row"
              spacing={3}
              mb={3}
              mt={-6}
              sx={{
                pl: { xs: 2, sm: 2, md: 0, lg: 0 },
                pr: { xs: 2, sm: 2, md: 0, lg: 0 },
                display: { xs: "block", md: "none", lg: "none" },
              }}
            >
              <Grid item md={8} lg={8}>
                {/* Please remove the title and make it dynamic....! */}
                {/* <Sharing /> */}
              </Grid>
            </Grid>
            {/* End of Sharing Container */}
          </Grid>

          <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
            {/* Extra Space On The Right Side */}
          </Grid>
        </Grid>

        <Footer />
        {/* <ModalContainer /> */}
        {/* <DialogContainer /> */}
      </ThemeProvider>
    </>
  );
};

export default ReduceImageSizeInKB;
