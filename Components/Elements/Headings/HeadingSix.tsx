import { Typography } from "@mui/material";
import React from "react";

interface HeadingSixProps {
  title?: string;
  id?: string;
}

const HeadingSix = (props: HeadingSixProps) => {
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
