import { Typography } from "@mui/material";
import React from "react";

// Most of the time Variants accepts body2 and subtitle2
const Paragraph = (props) => {
  const { id, text, variant, children } = props;
  return (
    <>
      <Typography variant="brandParagraph" mb={3} id={id ? id : null}>
        {text || children}
      </Typography>
    </>
  );
};

export default Paragraph;
