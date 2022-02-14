import React from 'react';

import 'style/main.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router: route }: AppProps): JSX.Element {
  const url: string = `https://cooperrunyan.vercel.app${route.route}`;

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1' />
        <meta name='description' content='A marketing and about site for web designer and developer, Cooper Runyan' />
        <title>Cooper Runyan | Portfolio</title>
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          description: 'The personal website for Cooper Runyan, developer.',
          url,
          site_name: 'Cooper Runyan | Portfolio',
          images: [],
        }}
        canonical={url}
      />

      <AnimatePresence
        exitBeforeEnter
        initial
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}>
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </>
  );
}
