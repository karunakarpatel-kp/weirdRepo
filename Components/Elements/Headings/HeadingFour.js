import { Typography } from "@mui/material";
import React from "react";

const HeadingFour = (props) => {
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
