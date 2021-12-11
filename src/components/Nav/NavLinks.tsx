import React from 'react';
import { motion } from 'framer-motion';
import NavLink from './NavLink';
import animation from 'animation';

export default function NavLinks(): JSX.Element {
  return (
    <motion.div
      variants={{
        from: { opacity: 0 },
        to: { opacity: 1 }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration / 2 }}
    >
      <ul className="nav__links">
        <NavLink name="Overview" href="/" />
        <NavLink name="Experience" />
        <NavLink name="Projects" />
        <NavLink name="About" />
      </ul>
    </motion.div>
  );
}
