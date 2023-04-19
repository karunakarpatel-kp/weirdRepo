import React from "react";
import Header from "@UI/Navigation";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Theme, { themeColors } from "@Theme/Theme";
import Grid from "@mui/material/Grid";
import Footer from "@UI/Footer";
import { useRouter } from "next/router";
import BrandingSection from "@UI/HomePageCards/BrandingSection";
import Toolbar from "@mui/material/Toolbar";

interface MainLayoutProps {
  children?: React.ReactNode;
}
const MainLayout = (props: MainLayoutProps) => {
  const route = useRouter();
  const homePageRoute = route.asPath;
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Header />
        <Grid container direction="row" spacing={2} mt={8}>
          {/* Display the About me Section in the HomePage */}
          {homePageRoute === "/" && <BrandingSection />}
          <Grid item xs={0} sm={0.5} md={1} lg={1.5}>
            {/* Extra Space On The Left Side */}
          </Grid>

          <Grid item xs={12} sm={11} md={10} lg={9} minHeight="100vh" border={0} sx={{ pl: { xs: 1 }, pr: { xs: 1 } }}>
            {/* Center Content */}
            {props.children}
          </Grid>

          <Grid item xs={0} sm={0.5} md={1} lg={1.5}>
            {/* Extra Space On The Right Side */}
          </Grid>
        </Grid>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
