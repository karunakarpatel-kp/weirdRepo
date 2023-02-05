import { Html, Main, Head, NextScript } from "next/document";
import React from "react";
import Gtag from "../Components/SEO/Gtag";

const Document = () => {
  return (
    <>
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          {/* Google Analytics Code */}
          <Gtag />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
};

export default Document;
