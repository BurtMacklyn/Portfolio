/* eslint-disable @next/next/no-sync-scripts */

import '~/style/variables.scss';
import '~/style/base.scss';
import Head from 'next/head';
import { Partytown } from '@builder.io/partytown/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <Partytown debug forward={['dataLayer.push']} />

      <Script strategy="lazyOnload" type="text/partytown" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <Script strategy="lazyOnload" type="text/partytown" id="google-analytics">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`}
      </Script>
      <Script strategy="lazyOnload" type="text/partytown" id="hotjar">
        {`(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:2963323,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`}
      </Script>

      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5, minimum-scale=1" />
    </Head>

    <Component {...pageProps} />
  </>
);

export default App;
