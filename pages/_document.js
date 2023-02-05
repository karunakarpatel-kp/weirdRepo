import { Html, Main, Head, NextScript } from "next/document";
import React, { useEffect } from "react";
import ReactGA from "react-ga";

const Document = () => {
  useEffect(() => {
    ReactGA.initialize("G-6JKN93G7ET");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          {/* Google Analytics Code */}
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
