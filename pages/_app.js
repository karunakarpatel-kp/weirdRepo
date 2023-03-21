import { ThemeProvider } from "@emotion/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "../styles/globals.css";
import "../public/fonts/font.css";

import { initGA, logPageView } from "../Components/SEO/Analytics";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);
  useEffect(() => {
    initGA();
    logPageView();
    router.events.on("routeChangeComplete", logPageView);
    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, []);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}
