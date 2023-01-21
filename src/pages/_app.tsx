import { config } from '@/config/config';
import { color, setCSSVariables, style } from '@/config/style';

import type { AppProps } from 'next/app';

import Head from 'next/head';

import { useEffect } from 'react';

import { font } from '@/config/font';
import { MQProvider } from '@/context/MQ';
import { opacity } from '@/css';
import { Inter, Roboto_Mono } from '@next/font/google';

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
  useEffect(() => void setCSSVariables(), []);
  return (
    <>
      <Head>
        <title>{config.title}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />

        <meta itemProp="name" content={config.title} />
        <meta itemProp="description" content={config.description} />
        <meta name="theme" content={color('0')} />
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
        *,
        *::before,
        *::after {
          box-sizing: inherit;
          font-family: inherit;
          color: inherit;
          flex-direction: column;
          margin: 0;
          padding: 0;
          outline: 0;
          border: 0;
        }

        html {
          --sans: ${inter.style.fontFamily};
          --mono: ${mono.style.fontFamily};
          --margin: ${style.margin.default};
          font-family: ${inter.style.fontFamily};
          background-color: ${color('0')};
          color: ${color('100')};
          color-scheme: dark;
          box-sizing: border-box;
          min-height: 100vh;
          display: flex;
        }

        ${Object.entries(style.breakpoints)
          .map(
            ([mq, v]) => `
          @media (max-width: ${v}) {
            html { --margin: ${(style.margin as any)[mq]}; }
          }`,
          )
          .join('\n')}

        ::selection {
          background-color: ${opacity(color('100'), 24)};
        }
      `}</style>
      <MQProvider>
        <Component {...pageProps} />
      </MQProvider>
    </>
  );
}
