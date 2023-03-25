import { Box } from "@mui/material";
import React from "react";

const SandboxCode = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, sm: 300, md: 500, lg: 500 },
          border: 0,
          borderRadius: 4,
          mt: 1,
          mb: 2,
          p: 0,
        }}
      >
        <iframe
          src="https://codesandbox.io/embed/new?codemirror=1"
          style={{ width: "100%", height: "100%" }}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </Box>
    </>
  );
};

export default SandboxCode;
