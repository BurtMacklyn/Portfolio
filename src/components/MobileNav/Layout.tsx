import React from 'react';

import * as icons from 'react-ionicons';
import Link from 'src/components/Link';

export default function MobileNav(): JSX.Element {
  return (
    <>
      <input type="checkbox" name="mobile-nav" id="mobile-nav" />
      <label htmlFor="mobile-nav" className="mobile-nav__box">
        <div className="mobile-nav__icon">
          <div className="mobile-nav__line mobile-nav__line--1"></div>
          <div className="mobile-nav__line mobile-nav__line--2"></div>
          <div className="mobile-nav__line mobile-nav__line--3"></div>
        </div>
      </label>
      <div role="navigation" className="mobile-nav__content">
        <Link href="/">
          <a className="mobile-nav__row">
            <icons.HomeOutline />
            <div>Overview</div>
            &nbsp;
          </a>
        </Link>
        <Link href="/experience">
          <a className="mobile-nav__row">
            <icons.TerminalOutline />
            <div>Experience</div>&nbsp;
          </a>
        </Link>
        <Link href="/projects">
          <a className="mobile-nav__row">
            <icons.RocketOutline />
            <div>Projects</div>&nbsp;
          </a>
        </Link>
        <Link href="/about">
          <a className="mobile-nav__row">
            <icons.PersonOutline />
            <div>About</div>&nbsp;
          </a>
        </Link>
      </div>
      <label htmlFor="mobile-nav" className="mobile-nav__backdrop"></label>
    </>
  );
}
