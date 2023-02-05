import { Typography } from "@mui/material";
import React from "react";

// Most of the time Variants accepts body2 and subtitle2
const Paragraph = (props) => {
  const { id, text, variant } = props;
  return (
    <>
      <Typography mt={3} id={id ? id : null}>
        {text}
      </Typography>
    </>
  );
};

export default Paragraph;
