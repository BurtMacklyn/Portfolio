import React from 'react';

import FooterLink from './FooterLink';
import { motion } from 'framer-motion';
import animation from 'src/config/animation';

import { useState, useEffect } from 'react';

export default function Footer(): JSX.Element {
  const [date, setDate] = useState(2021);

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

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
        <p className="footer__name">Cooper Runyan</p>
        <ul className="footer__links">
          <FooterLink name="Overview" href="/" />
          <FooterLink name="Experience" />
          <FooterLink name="Projects" />
          <FooterLink name="About" />
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
          Copyright © {date} Cooper Runyan
        </p>
        <p role="contentinfo" className="footer__legal">
          Website designed and created in it's entirety by Cooper Runyan.
        </p>
        <p role="contentinfo" className="footer__legal">
          If you have questions or comments, contact me at: cooperrunyan@gmail.com
        </p>
        <p role="contentinfo" className="footer__legal--mobile">
          Copyright © {date} Cooper Runyan. Website designed and created in it's entirety by Cooper Runyan. If you have questions or comments, contact me at:
          cooperrunyan@gmail.com
        </p>
      </motion.div>
    </footer>
  );
}
