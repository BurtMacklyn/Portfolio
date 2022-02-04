import React, { useEffect } from 'react';

import '../source/style/main.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }: AppProps): JSX.Element {
  const url: string = `https://cooperrunyan.vercel.app${router.route}`;
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
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
