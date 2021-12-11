import React from 'react';

import Header from './header/Header';
import About from './about/About';
import Experience from './experience/Experience';
import Contact from './contact/Contact';
import Links from './links/Links';

import MobileNav from '@components/MobileNav';
import Footer from '@components/Footer/Main';
import Menu from '@components/Menu/Main';

export default function Main(): JSX.Element {
  return (
    <main className="index">
      <MobileNav />
      <Header />
      <Menu active="overview" />
      <About />
      <Experience />
      <Links />
      <Contact />
      <Footer />
    </main>
  );
}
