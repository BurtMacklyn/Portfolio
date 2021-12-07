import React from 'react';

import Index from '@index/Main';
import Motion from '@components/Motion';

import Head from 'next/head';

export const config = { unstable_runtimeJS: false };

export default function Main(): JSX.Element {
  return (
    <>
      <Head>
        <title>INDEX PAGE 1</title>
      </Head>
      <Motion>
        <Index />
      </Motion>
    </>
  );
}
