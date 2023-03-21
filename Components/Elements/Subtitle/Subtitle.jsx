import { Typography } from "@mui/material";
import React from "react";

const Subtitle = (props) => {
  return (
    <Typography {...props} variant="blogPostBrandSubheading" mb={3}>
      {props.text}
    </Typography>
  );
};

export default Subtitle;
