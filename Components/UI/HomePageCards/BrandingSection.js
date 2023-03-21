import React from "react";
import Image from "next/image";

import { Box } from "@mui/system";
import { themeColors } from "../../Theme/Theme";

import karunakarImage from "../../../public/karunakarImage.svg";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const BrandingSection = () => {
  return (
    <>
      <Box
        width="100%"
        minHeight={500}
        mt={0}
        bgcolor={themeColors.primaryMain}
        sx={{ mb: { xs: 0, sm: 0, md: 3, lg: 3 } }}
      >
        <Box textAlign="center" mt={1} sx={{ border: "0px solid red" }}>
          <Image src={karunakarImage} width={180} height={220} alt="karunakar" />
        </Box>
        <Box textAlign="center">
          <Typography variant="h1" color="white">
            Hi, Karunakar Patel
          </Typography>
          <Typography variant="brandingSectionIntro" mt={3} color="#CFCDE2" pr={4} pl={4}>
            A front-end engineer focused on building top-notch web apps and helping developers improve their skills
          </Typography>
          <Typography variant="body2" color="#CFCDE2" mt={3} sx={{ mb: { xs: 3 } }}>
            Find more about my{" "}
            <Link href="/" style={{ color: "#FFCA3E", marginRight: "6px" }}>
              work
            </Link>
            and
            <Link href="/" style={{ color: "#FFCA3E", marginLeft: "6px" }}>
              article
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default BrandingSection;
