import { Html, Head, Main, NextScript } from 'next/document';
import SeoLinks from 'src/components/SeoLinks';

export const config = { unstable_runtimeJS: false };

export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="./icons/apple-icon-180.png" />
        <link rel="apple-touch-icon" href="icons/apple-icon-180.png" />

        <meta name="apple-mobile-web-app-capable" content="yes" />

        <SeoLinks />

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
