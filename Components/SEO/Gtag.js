import React from "react";
import Script from "next/script";

const Gtag = () => {
  return (
    <>
      {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6JKN93G7ET" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6JKN93G7ET');
        `}
      </Script> */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-6JKN93G7ET`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-6JKN93G7ET', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
    </>
  );
};

export default Gtag;
