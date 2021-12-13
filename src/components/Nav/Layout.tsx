import React from 'react';

import NavTag from './NavTag';
import NavLinks from './NavLinks';

export default function Nav(): JSX.Element {
  return (
    <div className="nav__container">
      <nav className="nav">
        <NavTag i={1} />
        <NavLinks />
        <NavTag i={2} />
      </nav>
    </div>
  );
}
