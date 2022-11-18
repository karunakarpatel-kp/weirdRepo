import { Typography } from "@mui/material";
import React from "react";

const Subtitle = (props) => {
  return (
    <Typography variant="subtitle2" {...props}>
      {props.text}
    </Typography>
  );
};

export default Subtitle;
