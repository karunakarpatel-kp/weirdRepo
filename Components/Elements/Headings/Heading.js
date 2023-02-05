import { Typography } from "@mui/material";
import React from "react";

const Heading = (props) => {
  return (
    <>
      {props.variant === "h1" ? (
        <Typography variant={props.variant} id={props.id ? props.id : ""} mb={1}>
          {props.title}
        </Typography>
      ) : (
        <Typography variant={props.variant} id={props.id ? props.id : ""} mt={2} mb={0}>
          {props.title}
        </Typography>
      )}
    </>
  );
};

export default Heading;
