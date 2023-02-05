import React from "react";
import Header from "../UI/Navigation";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Theme from "../Theme/Theme";
import Grid from "@mui/material/Grid";
import Footer from "../UI/Footer";

const MainLayout = (props: any) => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Header />
        <Grid container direction="row" spacing={0} mt={2}>
          <Grid item xs={12} sm={2} md={1} lg={2.5}>
            {/* Extra Space On The Left Side */}
          </Grid>

          <Grid item xs={12} sm={8} md={10} lg={7} minHeight="100vh">
            {/* Center Content */}
            {props.children}
          </Grid>

          <Grid item xs={12} sm={2} md={1} lg={2.5}>
            {/* Extra Space On The Right Side */}
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
