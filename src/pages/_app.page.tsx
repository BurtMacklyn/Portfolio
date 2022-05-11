/* eslint-disable @next/next/no-sync-scripts */

import '~/style/variables.scss';
import '~/style/base.scss';
import Head from 'next/head';
import { Partytown } from '@builder.io/partytown/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    hotjar.initialize(2963323, 6);
  }, []);

  return (
    <>
      <Head>
        <Partytown debug forward={['dataLayer.push']} />

        <Script strategy="lazyOnload" type="text/partytown" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
        <Script strategy="lazyOnload" type="text/partytown" id="google-analytics">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`}
        </Script>

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5, minimum-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
