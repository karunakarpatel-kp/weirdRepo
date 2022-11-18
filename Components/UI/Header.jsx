import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import React from "react";
import Logo from ".././../public/Logo.svg";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar sx={{ height: "80px" }}>
            {/* For Desktop */}
            <Box sx={{ display: { xs: "none", lg: "block", md: "block" }, marginLeft: 10 }}>
              <Link href="/">
                <Image alt="Logo" src={Logo} width={222} height={50} />
              </Link>
            </Box>
            {/* For Mobile Phones */}
            <Box sx={{ display: { xs: "block", md: "none", lg: "none" } }}>
              <Link href="/">
                <Image alt="Logo" src={Logo} width={152} height={35} />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Stack direction="row" spacing={2} sx={{ marginRight: { xs: 0, md: 10, lg: 10 } }}>
              <Link href="/Blog">
                <Button variant="contained" disableElevation>
                  Blog
                </Button>
              </Link>
              <Button variant="contained" disableElevation>
                About Me
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
