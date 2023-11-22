import { ThemeProvider } from "@emotion/react";
import { Router, useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect } from "react";

import { AppProps } from "next/app";
import nProgress from "nprogress";
import { NextComponentType, NextPage } from "next";

import "../styles/globals.css";
import "../styles/nProgress.css";
import "../public/fonts/font.css";

// Layout of the Nextjs Page with TypeScript...!

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const _app = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default _app;
