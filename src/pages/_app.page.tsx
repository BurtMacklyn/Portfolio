/* eslint-disable @next/next/no-sync-scripts */

import 'src/style/base.scss';
import Head from 'next/head';
import { Partytown } from '@builder.io/partytown/react';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <Partytown debug forward={['dataLayer.push']} />

      <script type="text/partytown" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <script type="text/partytown" id="google-analytics">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`}
      </script>

      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5, minimum-scale=1" />
    </Head>

    <Component {...pageProps} />
  </>
);

export default App;
