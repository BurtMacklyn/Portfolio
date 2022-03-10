import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <base href="/" />

        <link rel="apple-touch-icon" href="/pwa/apple-touch-icon.png" />
        <link rel="manifest" href="./manifest.json" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <link rel="apple-touch-icon" href="./pwa/apple-icon-180.png" />
        <link rel="apple-touch-icon" href="./pwa/apple-icon-180.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

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
