// eslint-disable-next-line no-use-before-define
import type React from 'react';

import Head from 'next/head';
import { Portal } from '~/components/portal/portal.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';

const Snake: React.FC = () => (
  <Portfolio>
    <Head>
      <title>Snake</title>
    </Head>
    <Portal noBack url={new URL('https://cooperrunyan-snake.netlify.app')} />
  </Portfolio>
);

export default Snake;
