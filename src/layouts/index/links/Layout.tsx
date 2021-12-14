import React from 'react';
import { motion } from 'framer-motion';
import animation from 'src/config/animation';
import Link from 'src/components/Link';

export default function Layout(): JSX.Element {
  return (
    <motion.div
      variants={{
        from: { opacity: 0 },
        to: { opacity: 1 }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration }}
      className="links"
    >
      <div className="links__content">
        <Link href="/experience">
          <a className="links__link">Experience</a>
        </Link>
        <Link href="/projects">
          <a className="links__link">Projects</a>
        </Link>
        <Link href="/about">
          <a className="links__link">About</a>
        </Link>
      </div>
    </motion.div>
  );
}
