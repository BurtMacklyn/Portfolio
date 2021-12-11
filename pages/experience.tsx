import React from 'react';

import Experience from '@experience/Main';
import Motion from '@components/Motion';

import Head from 'next/head';

export default function Main(): JSX.Element {
  return (
    <Motion>
      <Head>
        <title>Cooper Runyan | Experience</title>
      </Head>
      <Experience />
    </Motion>
  );
}
