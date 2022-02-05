import React from 'react';

import { App, Title, Directions, Footer } from 'src/components';

import { Header } from './Header';
import { Codepen } from './Codepen';

export function Overview() {
  return (
    <App className='overview'>
      <Title>Overview</Title>
      <Header />
      <Directions next='/experience' last='/resume' />
      <Codepen />
      <Footer />
    </App>
  );
}
