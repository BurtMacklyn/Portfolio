// eslint-disable-next-line no-use-before-define
import type React from 'react';

import Head from 'next/head';
import { Portal } from '~/components/Portal/Portal';
import { Portfolio } from '~/components/Portfolio/Portfolio';

const RetroMusic: React.FC = () => (
  <Portfolio>
    <Head>
      <title>Music</title>
    </Head>
    <Portal url={new URL('https://retro-music.herokuapp.com')} />
  </Portfolio>
);

export default RetroMusic;
