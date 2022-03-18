/* eslint-disable no-eval */
import { Html, Head, Main, NextScript } from 'next/document';
import { pallette } from '~/config';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <base href="/" />

        <link rel="apple-touch-icon" href="/pwa/apple-touch-icon.webp" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content={pallette.white} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
