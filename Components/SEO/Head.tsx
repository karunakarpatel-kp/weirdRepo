import React from "react";
import Head from "next/head";

const HeaderSection = (props: any) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
    </>
  );
};

export default HeaderSection;
