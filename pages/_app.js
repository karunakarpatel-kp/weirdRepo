import { ThemeProvider } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "../styles/globals.css";
import "../public/fonts/font.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
}
