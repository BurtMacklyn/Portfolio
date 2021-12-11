import React from 'react';

import Projects from '@projects/Main';
import Motion from '@components/Motion';

import Head from 'next/head';

export default function Main(): JSX.Element {
  return (
    <Motion>
      <Head>
        <title>Cooper Runyan | Projects</title>
      </Head>
      <Projects />
    </Motion>
  );
}
