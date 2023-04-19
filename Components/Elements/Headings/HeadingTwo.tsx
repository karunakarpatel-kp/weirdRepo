import { Typography } from "@mui/material";
import React from "react";

interface HeadingTwoProps {
  id: string;
  title: string;
}

const HeadingTwo = (props: HeadingTwoProps) => {
  const { title, id } = props;
  return (
    <>
      <Typography variant="blogPostBrandHeadingTwo" mb={2} id={id ? id : ""}>
        {title}
      </Typography>
    </>
  );
};

export default HeadingTwo;
