import React from 'react';
import Motion from 'src/components/Motion/Layout';

import Error from 'pages/404';
import Head from 'next/head';

export default function Layout(): JSX.Element {
  return (
    <Motion>
      <Head>
        <title>Cooper Runyan | Projects</title>
      </Head>
      <Error />
    </Motion>
  );
}
