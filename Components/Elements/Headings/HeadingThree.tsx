import { Typography } from "@mui/material";
import React from "react";

interface HeadingThreeProps {
  title: string;
  id: string;
}

const HeadingThree = (props: HeadingThreeProps) => {
  const { title, id } = props;
  return (
    <>
      <Typography variant="blogPostBrandHeadingThree" mb={2} id={id ? id : ""}>
        {title}
      </Typography>
    </>
  );
};

export default HeadingThree;
