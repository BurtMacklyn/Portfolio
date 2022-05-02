// eslint-disable-next-line no-use-before-define
import type React from 'react';

import Head from 'next/head';
import { Portal } from '~/components/Portal/Portal';
import { Portfolio } from '~/components/Portfolio/Portfolio';

const Snake: React.FC = () => (
  <Portfolio>
    <Head>
      <title>Snake</title>
    </Head>
    <Portal noBack url={new URL('https://cooperrunyan-snake.netlify.app')} />
  </Portfolio>
);

export default Snake;
