import React from 'react';

import Index from '@index/Main';
import Motion from '@components/Motion';

import Head from 'next/head';

export default function Main(): JSX.Element {
  return (
    <Motion>
      <Head>
        <title>Cooper Runyan | Overview</title>
      </Head>
      <Index />
    </Motion>
  );
}
