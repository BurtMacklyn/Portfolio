import React from 'react';
import { footer } from 'src/content/global';

import FooterLink from './FooterLink';
import { motion } from 'framer-motion';
import animation from 'src/config/animation';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer" style={{ overflow: 'hidden' }}>
      <motion.div
        variants={{
          from: { opacity: 0, translateY: 100 },
          to: { opacity: 1, translateY: 0 }
        }}
        initial="from"
        exit="from"
        animate="to"
        transition={{ type: animation.function, duration: animation.duration }}
        className="footer__section footer__section--1"
      >
        <p className="footer__name">{footer.name}</p>
        <ul className="footer__links">
          <FooterLink name="Overview" href="/" />
          <FooterLink name="Experience" href="/" />
          <FooterLink name="Projects" href="/" />
          <FooterLink name="About" href="/" />
        </ul>
      </motion.div>
      <motion.div
        variants={{
          from: { opacity: 0, translateY: 100 },
          to: { opacity: 1, translateY: 0 }
        }}
        initial="from"
        exit="from"
        animate="to"
        transition={{ type: animation.function, duration: animation.duration }}
        className="footer__section footer__section--2"
      >
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
      </motion.div>
    </footer>
  );
}
