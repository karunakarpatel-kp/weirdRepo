import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageOnLeftCard = (props) => {
  const { ImageAlt, ImageSrc, Title, Description, href } = props;
  return (
    <>
      {/* For Mobile Versions Images Goes Here...! */}
      <Grid item xs={12} sm={12} md={6} lg={6} mt={4} display={{ xs: "block", sm: "none", lg: "none", md: "none" }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box maxWidth={400} maxHeight={351} display="flex" justifyContent="center" alignItems="center">
            <Image alt={ImageAlt} src={ImageSrc} width={360} />
          </Box>
        </Box>
      </Grid>

      <Grid
        container
        direction="row"
        spacing={0}
        width={{ xs: "100%", md: "1072px", lg: "1072px" }}
        m="auto"
        mt={{ xs: 2, sm: 4, md: 8, lg: 8 }}
        mb={6}
      >
        {/* For Desktop Versions Image Goes Here...! */}
        <Grid item xs={12} sm={12} md={6} lg={6} display={{ xs: "none", sm: "none", lg: "block", md: "block" }}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box maxWidth={528} maxHeight={351} display="flex" justifyContent="center" alignItems="center">
              <Image alt={ImageAlt} src={ImageSrc} style={{ maxWidth: "528px", maxHeight: "351px" }} />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} pl={2}>
          <Typography variant="h1">{Title}</Typography>
          <Typography mt={2} border={0} mb={2}>
            {Description}
          </Typography>
          <Link href={href}>
            <Button variant="contained" disableElevation size="large" color="secondary">
              Read More
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default ImageOnLeftCard;
