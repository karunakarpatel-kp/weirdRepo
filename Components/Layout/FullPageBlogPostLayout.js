import React, { useEffect, useState } from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Fab, Grid } from "@mui/material";
import Footer from "../UI/Footer";
import Theme from "../Theme/Theme";
import { ArrowUpward } from "@mui/icons-material";
import Navigation from "../UI/Navigation";

const FullPageBlogPostLayout = (props) => {
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
      <Grid container direction="row" spacing={0} mt={2}>
        <Grid item xs={12} sm={1.5} md={2} lg={3}>
          {/* Extra Space On The Left Side */}
        </Grid>

        <Grid
          item
          xs={12}
          sm={9}
          md={8}
          lg={6}
          minHeight="100vh"
          pl={{ xs: 2, sm: 0, md: 0, lg: 0 }}
          pr={{ xs: 2, sm: 0, md: 0, lg: 0 }}
        >
          {/* Center Content */}
          {props.children}
        </Grid>

        <Grid item xs={12} sm={1.5} md={2} lg={3}>
          {/* Extra Space On The Right Side */}
          {showButton && (
            <Fab
              size="small"
              aria-label="scroll back to top"
              sx={{ position: "fixed", right: 30, bottom: 30, backgroundColor: "secondary.main" }}
              onClick={scrollToTop}
            >
              <ArrowUpward />
            </Fab>
          )}
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
};

export default FullPageBlogPostLayout;
