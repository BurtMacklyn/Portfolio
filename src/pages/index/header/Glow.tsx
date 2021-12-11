import React from 'react';
import { motion } from 'framer-motion';

import breakpoints from 'breakpoints';
import animation from 'animation';

import { useMediaQuery } from '@react-hook/media-query';

export default function Glow(): JSX.Element {
  const lg = useMediaQuery(breakpoints.lg);
  return (
    <motion.div
      className="header__glow"
      variants={{
        from: { width: 0, opacity: 0 },
        to: { width: lg ? '100vw' : '100vw', opacity: 1 }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration }}
    ></motion.div>
  );
}
