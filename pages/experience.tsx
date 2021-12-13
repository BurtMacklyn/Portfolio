import Motion from 'src/components/Motion/Layout';

import Head from 'next/head';

import React from 'react';

import Nav from 'src/components/Nav/Layout';
import Menu from 'src/components/Menu/Layout';
import Footer from 'src/components/Footer/Layout';
import MobileNav from 'src/components/MobileNav/Layout';

import Header from 'src/layouts/experience/Header/Layout';
import Content from 'src/layouts/experience/CardsSection/Layout';

export default function Layout(): JSX.Element {
  return (
    <Motion>
      <Head>
        <title>Cooper Runyan | Experience</title>
      </Head>
      <main className="experience">
        <MobileNav />
        <Nav />
        <Menu active="experience" />
        <Header />
        <Content />
        <Footer />
      </main>
    </Motion>
  );
}
