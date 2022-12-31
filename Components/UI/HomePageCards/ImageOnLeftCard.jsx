import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageOnLeftCard = (props) => {
  const { ImageAlt, ImageSrc, Title, Description, href } = props;
  const textTruncate = (Description) => {
    return <>{Description?.length > 300 ? `${Description.substring(0, 200)}....` : Description} </>;
  };
  return (
    <>
      <Grid item xs={12} sm={12} md={6} lg={6} display={{ xs: "block", sm: "none", lg: "none", md: "none" }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box maxWidth={400} maxHeight={351} display="flex" justifyContent="center" alignItems="center">
            <Image alt={ImageAlt} src={ImageSrc} style={{ width: "100%", height: "auto" }} />
          </Box>
        </Box>
      </Grid>

      <Grid container direction="row" m="auto" mt={{ xs: 2, sm: 8, md: 8, lg: 8 }} mb={8}>
        {/* For Desktop Versions Image Goes Here...! */}
        <Grid item xs={12} sm={12} md={6} lg={5} display={{ xs: "none", sm: "none", lg: "flex", md: "flex" }}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image alt={ImageAlt} src={ImageSrc} style={{ width: "100%", height: "auto", margin: "auto" }} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={7} mt={2} pl={{ xs: 2, sm: 2, md: 2, lg: 4 }}>
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
      </Grid>
    </>
  );
};

export default ImageOnLeftCard;

{
  /* For Mobile Versions Images Goes Here...! */
}
// <Grid item xs={12} sm={12} md={6} lg={6} mt={4} display={{ xs: "block", sm: "none", lg: "none", md: "none" }}>
//   <Box display="flex" justifyContent="center" alignItems="center">
//     <Box maxWidth={400} maxHeight={351} display="flex" justifyContent="center" alignItems="center">
//       <Image alt={ImageAlt} src={ImageSrc} style={{ width: "100%", height: "auto" }} />
//     </Box>
//   </Box>
// </Grid>

// <Grid container direction="row" spacing={0} m="auto" mt={{ xs: 2, sm: 4, md: 8, lg: 8 }} mb={6} mr={0}>
//   {/* For Desktop Versions Image Goes Here...! */}
//   <Grid
//     item
//     xs={12}
//     sm={12}
//     md={6}
//     lg={6}
//     xl={6}
//     display={{ xs: "none", sm: "none", lg: "flex", md: "flex", xl: "block" }}
//   >
//     <Box display="flex" justifyContent="center" alignItems="center">
//       <Box maxWidth={528} maxHeight={351} display="flex" justifyContent="center" alignItems="center">
//         <Image alt={ImageAlt} src={ImageSrc} style={{ width: "100%", height: "auto" }} />
//       </Box>
//     </Box>
//   </Grid>

//   <Grid
//     item
//     xs={12}
//     sm={12}
//     md={6}
//     lg={6}
//     xl={6}
//     pl={{ xs: 2, sm: 0, md: 0, lg: 2, xl: 2 }}
//     ml={{ xs: 0, sm: 0, md: 0, lg: 0, xl: 0 }}
//   >
//     <Typography variant="h1">{Title}</Typography>
//     <Typography mt={2} border={0} mb={2}>
//       {Description}
//     </Typography>
//     <Link href={href}>
//       <Button variant="contained" disableElevation size="large" color="secondary">
//         Read More
//       </Button>
//     </Link>
//   </Grid>
// </Grid>
