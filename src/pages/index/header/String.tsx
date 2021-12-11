import React from 'react';

import { header } from '@content/index';

import { motion } from 'framer-motion';
import animation from 'animation';

export default function String({ number }: { number: 1 | 2 }): JSX.Element {
  return (
    <motion.div
      className={`header__string header__string--${number}`}
      variants={{
        from: { transform: `translateX(${number === 1 ? '' : '-'}100%)`, opacity: 0 },
        to: { transform: 'translateX(0%)', opacity: 1 }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration / 2 }}
    >
      <code className={`header__string header__string--${number}`}>{header[`tag${number}`]}</code>
    </motion.div>
  );
}
