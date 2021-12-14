import React, { ReactNode } from 'react';

import Socials from './Socials';
import Nav from 'src/components/Nav/Layout';

export default function Header({ children }: { children: ReactNode }): JSX.Element {
  return (
    <header className="header">
      <Nav />
      <div className="header__contents">{children}</div>
      <Socials />
    </header>
  );
}
