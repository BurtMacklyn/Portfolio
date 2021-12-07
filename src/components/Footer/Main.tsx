import React from 'react';
import { footer } from '@content/global';

import FooterLink from './FooterLink';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__section footer__section--1">
        <p className="footer__name">{footer.name}</p>
        <ul className="footer__links">
          <FooterLink name="Overview" href="/" />
          <FooterLink name="Experience" href="/" />
          <FooterLink name="Projects" href="/" />
          <FooterLink name="About" href="/" />
        </ul>
      </div>
      <div className="footer__section footer__section--2">
        <p role="contentinfo" className="footer__legal">
          {footer.line1}
        </p>
        <p role="contentinfo" className="footer__legal">
          {footer.line2}
        </p>
        <p role="contentinfo" className="footer__legal">
          {footer.line3}
        </p>
        <p role="contentinfo" className="footer__legal--mobile">
          {footer.mobile}
        </p>
      </div>
    </footer>
  );
}
