import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// API For Pixabay
// x5Q4Oy1uPz5GdfZfLFTjDpIyrARNBpRG0VoHA1xWG8gmLQ607ejW0gtE

const ImageOnRightCard = (props) => {
  const { Title, Description, href, ImageSrc, ImageAlt } = props;

  const textTruncate = (Description) => {
    return <>{Description?.length > 300 ? `${Description.substring(0, 200)}....` : Description} </>;
  };
  return (
    <>
      {/* For Mobile Versions Images Goes Here...! */}
      <Grid item xs={12} sm={12} md={6} lg={6} display={{ xs: "block", sm: "none", lg: "none", md: "none" }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box maxWidth={400} maxHeight={351} display="flex" justifyContent="center" alignItems="center">
            <Image alt={ImageAlt} src={ImageSrc} style={{ width: "100%", height: "auto" }} />
          </Box>
        </Box>
      </Grid>

      <Grid container direction="row" m="auto" mb={{ xs: 3, sm: 0, md: 0, xl: 0 }}>
        <Grid item xs={12} sm={12} md={6} lg={7} mt={2} pl={{ xs: 2, sm: 0, md: 0, lg: 0 }}>
          <Typography variant="h1">{Title}</Typography>
          <Typography mt={2} pl={0} pr={1} mb={3} sx={{ textOverflow: "ellipsis", overflow: "hidden" }}>
            {textTruncate(Description)}
          </Typography>
          <Link href={href}>
            <Button variant="contained" disableElevation size="large" color="secondary">
              Read More
            </Button>
          </Link>
        </Grid>

        {/* For Desktop Versions Image Goes Here...! */}
        <Grid item xs={12} sm={12} md={6} lg={5} display={{ xs: "none", sm: "none", lg: "flex", md: "flex" }}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image alt={ImageAlt} src={ImageSrc} style={{ width: "100%", height: "auto", margin: "auto" }} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ImageOnRightCard;
