import React from 'react';

import { motion } from 'framer-motion';
import animation from 'src/config/animation';

export default function Layout(): JSX.Element {
  return (
    <motion.div
      className="header__glow"
      variants={{
        from: { opacity: 0, width: '0vw' },
        to: { opacity: 1, width: '120vw' }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration }}
    ></motion.div>
  );
}
