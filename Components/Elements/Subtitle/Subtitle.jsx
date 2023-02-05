import { Typography } from "@mui/material";
import React from "react";

const Subtitle = (props) => {
  return (
    <Typography {...props} variant="body2" component="p" fontSize="medium">
      {props.text}
    </Typography>
  );
};

export default Subtitle;
