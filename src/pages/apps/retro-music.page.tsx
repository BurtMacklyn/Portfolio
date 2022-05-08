// eslint-disable-next-line no-use-before-define
import type React from 'react';

import Head from 'next/head';
import { Portal } from '~/components/portal/portal.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';

const RetroMusic: React.FC = () => (
  <Portfolio>
    <Head>
      <title>Music</title>
    </Head>
    <Portal noBack url={new URL('https://retro-music-2.netlify.com')} />
  </Portfolio>
);

export default RetroMusic;
