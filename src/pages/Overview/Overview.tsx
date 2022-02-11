import React from 'react';

import { App, Title, Footer } from 'src/components';

import { Header } from './Header';
import { Codepen } from './Codepen';
import { Stacks } from './Stacks';
import { Experience } from './Experience';
import { Technologies } from './Technologies';

export function Overview() {
  return (
    <App className='overview'>
      <Title>Overview</Title>
      <Header />
      <Codepen />
      <Stacks />
      <Experience />
      <Technologies />
      <Footer />
    </App>
  );
}
