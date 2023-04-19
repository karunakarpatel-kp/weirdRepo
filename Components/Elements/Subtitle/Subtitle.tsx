import { Typography } from "@mui/material";
import React from "react";

interface SubtitleProps {
  text: string;
}

const Subtitle = (props: SubtitleProps) => {
  return (
    <Typography {...props} variant="blogPostBrandSubheading" mb={3}>
      {props.text}
    </Typography>
  );
};

export default Subtitle;
