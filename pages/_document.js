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
          {/* Google Adsense Code In Below */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2687924945894784"
            crossorigin="anonymous"
          ></script>
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
