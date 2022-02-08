import React from 'react';

import { App, Title, Footer } from 'src/components';

import { Header } from './Header';
import { Codepen } from './Codepen';

export function Overview() {
  return (
    <App className='overview'>
      <Title>Overview</Title>
      <Header />
      <Codepen />
      <Footer />
    </App>
  );
}
