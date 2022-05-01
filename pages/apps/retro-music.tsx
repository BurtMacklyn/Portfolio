// eslint-disable-next-line no-use-before-define
import type React from 'react';

import Head from 'next/head';
import { Portfolio, Portal } from '~/components';

const RetroMusic: React.FC = () => (
  <Portfolio>
    <Head>
      <title>Music</title>
    </Head>
    <Portal url={new URL('https://retro-music.herokuapp.com')} />
  </Portfolio>
);

export default RetroMusic;
