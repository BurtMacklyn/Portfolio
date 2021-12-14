import React from 'react';

import Header from 'src/layouts/index/header/Layout';
import About from 'src/layouts/index/about/Layout';
import Experience from 'src/layouts/index/experience/Layout';
import Contact from 'src/layouts/index/contact/Layout';
import Links from 'src/layouts/index/links/Layout';

import MobileNav from 'src/components/MobileNav/Layout';
import Footer from 'src/components/Footer/Layout';
import Menu from 'src/components/Menu/Layout';
import Motion from 'src/components/Motion/Layout';

import Head from 'next/head';

export default function Layout(): JSX.Element {
  return (
    <Motion>
      <Head>
        <title>Cooper Runyan | Overview</title>
      </Head>
      <>
        <MobileNav />
        <Menu active="overview" />
        <main className="index">
          <Header />
          <About />
          <Experience />
          <Links />
          <Contact />
          <Footer />
        </main>
      </>
    </Motion>
  );
}
