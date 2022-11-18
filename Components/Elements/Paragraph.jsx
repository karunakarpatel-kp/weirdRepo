import { Typography } from "@mui/material";
import React from "react";

// Most of the time Variants accepts body2 and subtitle2
const Paragraph = (props) => {
  return (
    <>
      <Typography variant={props.variant} mt={3} {...props}>
        {props.text}
      </Typography>
    </>
  );
};

export default Paragraph;
