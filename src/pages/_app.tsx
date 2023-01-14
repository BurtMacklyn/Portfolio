import '@/style.scss';

import { config, css, style } from '@/config';

import type { AppProps } from 'next/app';

import Head from 'next/head';

import { useEffect } from 'react';

import { Inter, Roboto_Mono } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--sans',
  fallback: ['Roboto', 'Helvetica Neue', 'system-ui'],
});

const mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--mono',
  fallback: ['Consolas', 'Menlo', 'monospace'],
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => css(), []);
  return (
    <>
      <Head>
        <title>{config.title}</title>

        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />

        <meta itemProp="name" content={config.title} />
        <meta itemProp="description" content={config.description} />
        <meta name="theme" content={style.colors.layer[0]} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta itemProp="image" content={config.siteImg} />

        <meta property="og:url" content="https://cooperrunyan.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:image" content={config.siteImg} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:image" content={config.siteImg} />
      </Head>
      <style jsx global>{`
        html {
          --sans: ${inter.style.fontFamily};
          --mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
