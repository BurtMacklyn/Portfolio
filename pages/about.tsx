import React from 'react';

import About from '@about/Main';
import Motion from '@components/Motion';

import Head from 'next/head';

export default function Main(): JSX.Element {
  return (
    <Motion>
      <Head>
        <title>Cooper Runyan | About</title>
      </Head>
      <About />
    </Motion>
  );
}
