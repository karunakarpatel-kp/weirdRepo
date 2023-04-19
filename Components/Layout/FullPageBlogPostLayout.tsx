import React, { useEffect, useState } from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Fab, Grid } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";

import Footer from "@UI/Footer";
import Theme from "@Theme/Theme";
import Navigation from "@UI/Navigation";

interface FullpageBlogPostLayoutProps {
  children?: React.ReactNode;
}

const FullPageBlogPostLayout = (props: FullpageBlogPostLayoutProps) => {
  const [showButton, setShowButon] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setShowButon(true);
      } else {
        setShowButon(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <ThemeProvider theme={Theme}>
      <Navigation />

      <Grid container direction="row" spacing={0} mt={8}>
        <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
          {/* Extra Space On The Left Side */}
        </Grid>

        <Grid item xs={12} sm={11} md={10} lg={9} minHeight="100vh" border={0}>
          {/* Center Content */}
          {props.children}
        </Grid>

        <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
          {/* Extra Space On The Right Side */}
        </Grid>
      </Grid>

      <Footer />
    </ThemeProvider>
  );
};

export default FullPageBlogPostLayout;
