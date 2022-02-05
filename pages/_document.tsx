import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {
  return (
    <Html lang='en'>
      <Head>
        <link rel='shortcut icon' type='image/x-icon' href='./favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='./icons/apple-icon-180.png' />
        <link rel='apple-touch-icon' href='icons/apple-icon-180.png' />
        <meta name='apple-mobile-web-app-capable' content='yes' />

        {sizes.map((size) => (
          <link key={sizes.indexOf(size)} rel='apple-touch-startup-image' href={`icons/apple-splash-${size}.jpg`} />
        ))}

        <meta name='theme-color' content='#103056' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
      </Head>
      <body style={{ backgroundColor: '#121317' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

const sizes = [
  '2048-2732',
  '2732-2048',
  '1668-2388',
  '2388-1668',
  '1536-2048',
  '2048-1536',
  '1668-2224',
  '2224-1668',
  '1620-2160',
  '2160-1620',
  '1284-2778',
  '2778-1284',
  '1170-2532',
  '2532-1170',
  '1125-2436',
  '2436-1125',
  '1242-2688',
  '2688-1242',
  '828-1792',
  '1792-828',
  '1242-2208',
  '2208-1242',
  '750-1334',
  '1334-750',
  '640-1136',
  '1136-640',
];
