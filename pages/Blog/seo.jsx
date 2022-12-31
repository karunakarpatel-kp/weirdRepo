import React from "react";

import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeView from "@mui/lab/TreeView";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

import RectangularAd from "../../Components/UI/Ads/RectangularAd";
import MainLayout from "../../Components/Layout/MainLayout";
import coding from "../../public/coding.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import Paragraph from "../../Components/Elements/Paragraph";
import Heading from "../../Components/Elements/Heading";
import Subtitle from "../../Components/Elements/Subtitle";
import FooterAd from "../../Components/UI/Ads/FooterAd";

const Seo = () => {
  const router = useRouter();

  const onTreeItemClickHandler = () => {
    // setTimeout(() => {
    //   router.push("#lastItem");
    // }, 3000);
  };
  return (
    <>
      <Box m="auto" mb={5} maxWidth={800} p={2} border={0}>
        <Heading variant="h1" title="Lorem, ipsum dolor sit amet consectetur adipisicing elit. " />

        <Stack direction="row" display="flex">
          <Subtitle text="By: Karunakar Patel" />
          <Box flexGrow={1}></Box>
          <Subtitle text="Home/Blog/Seo" mr={2} />
        </Stack>

        {/* Image For Desktop Screens */}
        <Box
          // width={990}
          // height={462}
          bgcolor="#ECECEC"
          mt={2}
          mb={2}
          p={1}
          textAlign="center"
          position="relative"
          sx={{
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}
        >
          <Image alt="Coding Image" src={coding} layout="responsive" />
        </Box>

        {/* Image for Mobile Screens */}
        {/* <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          mt={2}
          mb={2}
          display={{ xs: "block", sm: "none", lg: "none", md: "none" }}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box maxWidth={400} maxHeight={351} display="flex" justifyContent="center" alignItems="center">
              <Image alt="hi" src={coding} width={360} />
            </Box>
          </Box>
        </Grid> */}

        {/* <Box textAlign="center" mt={2} mb={2} sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none" } }}>
          <Image alt="Coding Image" src={coding} width={370} style={{ minWidth: "270px", margin: "auto" }} />
        </Box> */}

        <Stack
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          display="flex"
          spacing={{ xs: 0, sm: 1, md: 3, lg: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          <Subtitle
            text="Published Date: January 04 1997"
            sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
          />

          <Box flexGrow={1} sx={{ width: { xs: "100%", sm: "100%", md: 590, lg: 590 } }}>
            <Accordion elevation={0} sx={{ backgroundColor: "#ececec" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography variant="body2" sx={{ lineHeight: "0px", fontSize: ".8rem", margin: "auto" }}>
                  Table Of Contents
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <TreeView
                  aria-label="file system navigator"
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                  sx={{ flexGrow: 1, overflowY: "auto" }}
                >
                  <TreeItem
                    nodeId="11"
                    label="Heading Number One"
                    onClick={onTreeItemClickHandler}
                    sx={{ ".MuiTreeItem-label": { fontSize: "large" } }}
                  >
                    <TreeItem nodeId="12" label="Sub Heading Number One...!" />
                    <TreeItem nodeId="13" label="Sub Heading Number Three...!" />
                  </TreeItem>
                  <TreeItem nodeId="14" label="Heading Number One" sx={{ ".MuiTreeItem-label": { fontSize: "large" } }}>
                    <TreeItem nodeId="15" label="Sub Heading Number One...!" />
                    <TreeItem nodeId="16" label="Sub Heading Number Three...!" />
                  </TreeItem>
                </TreeView>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Subtitle text="Read Time: 10mins" sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }} />
        </Stack>

        <Box pl={0} pr={0}>
          <Paragraph text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed consectetur repudiandae voluptatem similique " />

          <Paragraph text="In this paragraphy text you will learn how to save the editable fields of car details to the state and more over make previous year claims to editable fields and save it in a a state." />

          <Paragraph text="In this paragraphy text you will learn how to save the editable fields of car details to the state and more over make previous year claims to editable fields and save it in a a state." />

          <Paragraph text="In this par sdf sdfl fdsk fdlkfj l skdfou sldfou flsdfj sd agraphy text you will learn how to save the editable fields of car details to the state and more over make previous year claims to editable fields and save it in a a state." />

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

          {/* <FooterAd /> */}
        </Box>
      </Box>
    </>
  );
};

export default Seo;

Seo.getLayout = function getLayout(page) {
  return (
    <>
      <MainLayout>{page}</MainLayout>
    </>
  );
};
