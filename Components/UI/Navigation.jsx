import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";

import Logo from ".././../public/Logo.svg";

const Navigation = () => {
  const [homePageActive, setHomePageActive] = useState(false);
  const [blogPageActive, setBlogPageActive] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    if (pathName === "/") {
      setHomePageActive(true);
      setBlogPageActive(false);
    }
    if (pathName.includes("/Blog")) {
      setHomePageActive(false);
      setBlogPageActive(true);
    }
  }, [pathName]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0}>
          <Toolbar sx={{ height: "64px", "&.MuiToolbar-root": { padding: 0 } }}>
            <Grid container direction="row" spacing={0}>
              {/* Display the About me Section in the HomePage */}
              <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
                {/* Extra Space On The Left Side */}
              </Grid>

              <Grid item xs={12} sm={11} md={10} lg={9} sx={{ pl: { xs: 1 }, pr: { xs: 2 } }}>
                {/* Center Container */}
                <Grid container>
                  <Grid item xs={6} sm={6} md={10} lg={10}>
                    <Box sx={{ display: { xs: "none", lg: "block", md: "block" }, marginLeft: "-12px" }}>
                      <Link href="/">
                        <Image alt="Logo" src={Logo} width={180} height={42} />
                      </Link>
                    </Box>
                    {/* For Mobile Phones */}
                    <Box sx={{ display: { xs: "block", md: "none", lg: "none" } }}>
                      <Link href="/">
                        <Image alt="Logo" src={Logo} width={152} height={35} />
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={2} lg={2}>
                    <Stack direction="row" spacing={4} sx={{ float: "right" }}>
                      <Link href="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23.088"
                          height="38.304"
                          viewBox="0 0 43.088 38.304"
                        >
                          <path
                            id="house-chimney"
                            d="M40.683,21.516a2.412,2.412,0,0,0,2.394-2.4,2.049,2.049,0,0,0-.823-1.8L38.3,13.84V4.788A2.391,2.391,0,0,0,35.91,2.394H33.516a2.391,2.391,0,0,0-2.394,2.394V7.534L23.154.524A2.485,2.485,0,0,0,21.583,0a2.158,2.158,0,0,0-1.646.6L.748,17.319A2.432,2.432,0,0,0,0,19.114a2.37,2.37,0,0,0,2.394,2.4H4.788V26.73a1.891,1.891,0,0,0-.007.209v8.371A2.992,2.992,0,0,0,7.773,38.3h1.2c.09,0,.18-.007.269-.015.112.007.224.015.337.015h4.189a2.992,2.992,0,0,0,2.992-2.992V28.728a2.391,2.391,0,0,1,2.394-2.394H23.94a2.391,2.391,0,0,1,2.394,2.394v6.583A2.992,2.992,0,0,0,29.326,38.3h4.227c.1,0,.209,0,.314-.007.082.007.165.007.247.007h1.2A2.992,2.992,0,0,0,38.3,35.311V34.1a5.271,5.271,0,0,0,.037-.606l-.052-11.985h2.394Z"
                            // fill="#848ab4"
                            fill={homePageActive ? "rgb(255, 202, 62)" : "#848ab4"}
                          />
                        </svg>
                      </Link>
                      <Link href="/Blog">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="33" viewBox="0 0 43 43">
                          <path
                            id="blog"
                            d="M16.125,2.688a2.685,2.685,0,0,0,2.688,2.688A18.814,18.814,0,0,1,37.625,24.188a2.688,2.688,0,0,0,5.375,0A24.183,24.183,0,0,0,18.813,0,2.685,2.685,0,0,0,16.125,2.688Zm0,8.063a2.685,2.685,0,0,0,2.688,2.688,10.749,10.749,0,0,1,10.75,10.75,2.687,2.687,0,1,0,5.375,0A16.129,16.129,0,0,0,18.813,8.063,2.685,2.685,0,0,0,16.125,10.75ZM8.063,12.094a4.031,4.031,0,0,0-8.062,0V30.906A12.094,12.094,0,1,0,12.094,18.813H10.75v8.063h1.344a4.031,4.031,0,1,1-4.031,4.031Z"
                            // fill="#848ab4"
                            fill={blogPageActive ? "rgb(255, 202, 62)" : "#848ab4"}
                          />
                        </svg>
                      </Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
                {/* Extra Space On The Right Side */}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
