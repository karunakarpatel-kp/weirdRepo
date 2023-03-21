import { Typography } from "@mui/material";
import React from "react";

const HeadingSix = (props) => {
  const { title, id } = props;
  return (
    <>
      <Typography variant="blogPostBrandHeadingSix" mb={2} id={id ? id : ""}>
        {title}
      </Typography>
    </>
  );
};

export default HeadingSix;
