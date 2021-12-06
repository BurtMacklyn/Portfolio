import { Html, Head, Main, NextScript } from 'next/document';

export const config = { unstable_runtimeJS: false };

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="./icons/apple-icon-180.png" />
        <link rel="apple-touch-icon" href="icons/apple-icon-180.png" />

        <meta name="apple-mobile-web-app-capable" content="yes" />

        <link rel="apple-touch-startup-image" href="icons/apple-splash-2048-2732.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-2732-2048.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-1668-2388.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-2388-1668.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-1536-2048.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-2048-1536.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-1668-2224.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-2224-1668.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-1620-2160.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-2160-1620.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-1284-2778.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-2778-1284.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-1170-2532.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-2532-1170.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-1125-2436.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-2436-1125.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-1242-2688.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-2688-1242.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-828-1792.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-1792-828.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-1242-2208.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-2208-1242.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-750-1334.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-1334-750.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-640-1136.jpg" />
        <link rel="apple-touch-startup-image" href="icons/apple-splash-1136-640.jpg" />
        <meta name="theme-color" content="#103056" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body style={{ backgroundColor: '#1b1d21' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
