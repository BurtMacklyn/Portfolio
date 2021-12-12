import React from 'react';
import { motion } from 'framer-motion';
import animation from 'animation';

export default function Glow({ i }: { i: 1 | 2 }): JSX.Element {
  return (
    <motion.div
      variants={{
        from: { opacity: 0, height: '0rem' },
        to: { opacity: 1, height: '32rem' }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration }}
      aria-hidden="true"
      className={`experience__glow experience__glow--${i}`}
    ></motion.div>
  );
}
