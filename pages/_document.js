import { Html, Main, Head, NextScript } from "next/document";
import React from "react";

const Document = () => {
  return (
    <>
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          {/* <link href="https://fonts.cdnfonts.com/css/georgia" rel="stylesheet" /> */}

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
