import { AppBar, Typography, Toolbar, Box, Stack, Icon } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar>
            {/* For Desktop */}
            <Box sx={{ marginLeft: { xs: 0, md: 10, lg: 10 } }}>
              <Typography variant="subtitle2">@Karunakar Patel. All Rights Reserved</Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }}></Box>
            <Stack direction="row" spacing={3} sx={{ marginRight: { xs: 0, md: 10, lg: 10 } }}>
              <FacebookIcon />
              <TwitterIcon />
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Footer;
