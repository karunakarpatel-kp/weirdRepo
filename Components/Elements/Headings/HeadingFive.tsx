import { Typography } from "@mui/material";
import React from "react";

interface HeadingFiveProps {
  title?: string;
  id?: string;
}

const HeadingFive = (props: HeadingFiveProps) => {
  const { title, id } = props;
  return (
    <>
      <Typography variant="blogPostBrandHeadingFive" mb={2} id={id ? id : ""}>
        {title}
      </Typography>
    </>
  );
};

export default HeadingFive;
