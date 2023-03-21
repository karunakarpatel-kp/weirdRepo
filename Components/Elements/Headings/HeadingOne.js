import { Typography } from "@mui/material";
import React from "react";

const HeadingOne = (props) => {
  const { title, id } = props;
  return (
    <>
      <Typography variant="blogPostBrandTitle" mt={1} sx={{ mb: { xs: 2, sm: 2, md: 3, lg: 3 } }} id={id ? id : ""}>
        {title}
      </Typography>
    </>
  );
};

export default HeadingOne;
