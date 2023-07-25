import "../public/assets/css/animate.min.css";
import React from "react";
import Head from "next/head";

import "../public/assets/css/global.css";
import "../public/assets/css/tailwind-built.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>UberServe Fibre Optic</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
