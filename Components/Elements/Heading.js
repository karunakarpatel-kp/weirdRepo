import { Typography } from "@mui/material";
import React from "react";

const Heading = (props) => {
  return (
    <Typography variant={props.variant} mb={2}>
      {props.title}
    </Typography>
  );
};

export default Heading;
