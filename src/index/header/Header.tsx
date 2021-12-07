import React from 'react';

import Socials from './Socials';
import Nav from '../../components/Nav';
import HeaderContents from './Contents';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <Nav />
      <HeaderContents />
      <Socials />
    </header>
  );
}
