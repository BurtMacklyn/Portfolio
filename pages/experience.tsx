import Motion from 'src/components/Motion/Layout';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Error from 'pages/404';

export default function Layout(): JSX.Element {
  // useEffect(() => {
  //   document.body.style.overflow = 'unset';
  // }, []);

  return (
    <Motion>
      <Head>
        <title>Cooper Runyan | Experience</title>
      </Head>
      <Error />
    </Motion>
  );
}
