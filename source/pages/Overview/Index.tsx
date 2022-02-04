import React from 'react';

import { Motion, Title, Directions, Footer } from 'source/components';

import { Header } from './Header';
import { Codepen } from './Codepen';

export default function Overview() {
  return (
    <Motion.Div className='App overview'>
      <Title>Overview</Title>
      <Header />
      <Directions next='/experience' last='/resume' />
      <Codepen />
      {/* <>
        <MobileNav />
        <Menu active='overview' />
        <main className='index'>
          <Header />
          <About />
          <Experience />
          <Links />
          <Contact />
          <Footer />
        </main>
      </> */}
      <Footer />
    </Motion.Div>
  );
}
