import { ThemeProvider } from "@emotion/react";
import { useRouter } from "next/router";
import { ReactElement, ReactNode, useEffect } from "react";

import { AppProps } from "next/app";

import "../styles/globals.css";
import "../public/fonts/font.css";
import { NextComponentType, NextPage } from "next";

// Layout of the Nextjs Page with TypeScript...!

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const _app = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default _app;
