import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageOnRightCard = (props) => {
  const { Title, Description, href, ImageSrc, ImageAlt } = props;
  return (
    <>
      {/* For Mobile Versions Images Goes Here...! */}
      <Grid item xs={12} sm={12} md={6} lg={6} display={{ xs: "block", sm: "none", lg: "none", md: "none" }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box maxWidth={400} maxHeight={351} display="flex" justifyContent="center" alignItems="center">
            <Image alt={ImageAlt} src={ImageSrc} width={360} />
          </Box>
        </Box>
      </Grid>

      <Grid container direction="row" spacing={2} width={{ xs: "100%", md: "1072px", lg: "1072px" }} mt={0} m="auto">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography variant="h1">{Title}</Typography>
          <Typography mt={2} pl={0} pr={1} border={0} mb={2}>
            {Description}
          </Typography>
          <Link href={href}>
            <Button variant="contained" disableElevation size="large" color="secondary">
              Read More
            </Button>
          </Link>
        </Grid>

        {/* For Desktop Versions Image Goes Here...! */}
        <Grid item xs={12} sm={12} md={6} lg={6} display={{ xs: "none", sm: "none", lg: "block", md: "block" }}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box maxWidth={528} maxHeight={351} display="flex" justifyContent="center" alignItems="center">
              <Image alt={ImageAlt} src={ImageSrc} style={{ maxWidth: "528px", maxHeight: "351px" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ImageOnRightCard;
