// eslint-disable-next-line no-use-before-define
import type React from 'react';
import { Portfolio, Portal } from '~/components';

const RetroMusic: React.FC = () => (
  <Portfolio>
    <Portal url={new URL('https://retro-music.herokuapp.com')} />
  </Portfolio>
);

export default RetroMusic;
