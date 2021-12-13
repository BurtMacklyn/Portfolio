import React from 'react';
import { motion } from 'framer-motion';
import animation from 'src/config/animation';
import Link from 'next/link';

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
        <Link href="/experience" passHref scroll={false}>
          <a className="links__link">Experience</a>
        </Link>
        <Link href="/projects" passHref scroll={false}>
          <a className="links__link">Projects</a>
        </Link>
        <Link href="/about" passHref scroll={false}>
          <a className="links__link">About</a>
        </Link>
      </div>
    </motion.div>
  );
}
