import { Typography } from "@mui/material";
import React from "react";

const HeadingFive = (props) => {
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
