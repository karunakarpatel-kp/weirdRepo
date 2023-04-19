import { Typography } from "@mui/material";
import React from "react";

interface HeadingFourProps {
  title?: string;
  id?: string;
}
const HeadingFour = (props: HeadingFourProps) => {
  const { title, id } = props;
  return (
    <>
      <Typography variant="blogPostBrandHeadingFour" mb={2} id={id ? id : ""}>
        {title}
      </Typography>
    </>
  );
};

export default HeadingFour;
