import React from 'react';

import Tag from './Tag';
import Link from 'next/link';

export default function Nav(): JSX.Element {
  return (
    <div className="nav__container">
      <nav className="nav">
        <Tag name="nav" className="nav__tag nav__tag--open" />
        <ul className="nav__links">
          <li className="nav__link nav__link--overview">
            <Link href="/">Overview</Link>
          </li>
          <li className="nav__link nav__link--experience">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="nav__link nav__link--projects">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="nav__link nav__link--about">
            <Link href="/about">About</Link>
          </li>
        </ul>
        <Tag name="nav" className="nav__tag nav__tag--close" closeTag />
      </nav>
    </div>
  );
}
