import React from 'react';

import Tag from '../Tag';
import NavLink from './NavLink';

export default function Nav(): JSX.Element {
  return (
    <div className="nav__container">
      <nav className="nav">
        <Tag name="nav" className="nav__tag nav__tag--open" />
        <ul className="nav__links">
          <NavLink name="Overview" href="/" />
          <NavLink name="Experience" />
          <NavLink name="Projects" />
          <NavLink name="About" />
        </ul>
        <Tag name="nav" className="nav__tag nav__tag--close" closeTag />
      </nav>
    </div>
  );
}
