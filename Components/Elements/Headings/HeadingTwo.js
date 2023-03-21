import { Typography } from "@mui/material";
import React from "react";

const HeadingTwo = (props) => {
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
