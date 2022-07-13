import React from 'react';
import Head from 'next/head';

import '~/style/variables.scss';
import '~/style/base.scss';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5, minimum-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
