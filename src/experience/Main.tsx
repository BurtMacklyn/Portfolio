import React from 'react';

import Nav from '../components/Nav';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

import Header from './Header/Header';
import Content from './Content/Content';

export default function Main(): JSX.Element {
  return (
    <main className="experience">
      <MobileNav />
      <Nav />
      <Menu active="experience" />
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
