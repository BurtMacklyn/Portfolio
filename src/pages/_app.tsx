import '@/style.scss';

import { config } from '@/config/config';
import { setCSSVariables, style } from '@/config/style';

import type { AppProps } from 'next/app';

import Head from 'next/head';

import { useEffect } from 'react';

import { Inter, Roboto_Mono } from '@next/font/google';
import { font } from '@/config/font';

const inter = Inter({
  subsets: ['latin'],
  variable: '--sans',
  fallback: ['Roboto', 'Helvetica Neue', 'system-ui'],
});

const mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--mono',
  fallback: ['Consolas', 'Menlo', 'monospace'],
});

(font.sans as any).variable = inter.variable as any;
(font.mono as any).variable = mono.variable as any;

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => setCSSVariables(), []);
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
          ${font.sans.variable}: ${inter.style.fontFamily};
          ${font.mono.variable}: ${mono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
