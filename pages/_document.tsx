/* eslint-disable no-eval */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <base href="/" />

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/pwa/apple-touch-icon.webp" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#fff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
