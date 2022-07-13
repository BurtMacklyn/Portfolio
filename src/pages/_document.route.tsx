import React from 'react';

import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="en">
    <Head>
      <base href="/" />

      <meta name="theme-color" content="#000000" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap" />
      <link rel="stylesheet" href="/fonts/BR_Cobane.css" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
