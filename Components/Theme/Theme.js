import { createTheme } from "@mui/material/styles";

export const themeColors = {
  primaryMain: "#020c53",
  secondaryMain: "#ffca3c",
  headingColor: "#002755",
};

let Theme = createTheme({
  palette: {
    primary: {
      main: themeColors.primaryMain,
    },
    secondary: {
      main: themeColors.secondaryMain,
    },
  },
  // Components
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "none",
        },
      },
    },
  },
});

Theme = createTheme(Theme, {
  typography: {
    h1: {
      fontFamily: "Georgia, sans-serif",
      fontSize: "1.6rem",
      letterSpacing: "0",
      fontWeight: "bold",
      lineHeight: "2.5rem",
      textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.4rem",
        lineHeight: "39px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.4rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
    h2: {
      fontFamily: "Georgia, sans-serif",
      fontSize: "1.5rem",
      letterSpacing: "0",
      fontWeight: "bold",
      lineHeight: "49px",
      textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
    h3: {
      fontFamily: "Georgia, sans-serif",
      fontSize: "1.4rem",
      letterSpacing: "0",
      fontWeight: "bold",
      lineHeight: "49px",
      textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
    h4: {
      fontFamily: "Georgia, sans-serif",
      fontSize: "1.3rem",
      letterSpacing: "0",
      fontWeight: "bold",
      lineHeight: "49px",
      textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
    body1: {
      fontSize: "1.2rem",
      fontWeight: "normal",
      fontFamily: "Georgia, sans-serif",
      lineHeight: "2rem",
      letterSpacing: "0px",

      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.2rem",
        lineHeight: "36px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.2rem",
        lineHeight: "36px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
    body2: {
      fontSize: "1.3rem",
      fontWeight: "normal",
      fontFamily: "Georgia, sans-serif",
      lineHeight: "36px",
      letterSpacing: "0px",

      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.0rem",
        // lineHeight: "36px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.0rem",
        // lineHeight: "36px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
  },
});

export default Theme;
