"use client";

import { AppProgressBar } from "next-nprogress-bar";
import React from "react";

const ProgressBar = () => {
  return <AppProgressBar height="1px" color="#ffffff" options={{ showSpinner: true }} shallowRouting />;
};

export default ProgressBar;
