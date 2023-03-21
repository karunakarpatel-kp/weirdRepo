import { Typography } from "@mui/material";
import React from "react";

const HeadingThree = (props) => {
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
