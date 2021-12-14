import React from 'react';

import { header } from 'src/content/index';

import { motion } from 'framer-motion';
import animation from 'src/config/animation';

export default function String({ i }: { i: 1 | 2 }): JSX.Element {
  return (
    <motion.div
      className={`header__string header__string--${i}`}
      variants={{
        from: { transform: `translateX(${i === 1 ? '' : '-'}100%)`, opacity: 0 },
        to: { transform: 'translateX(0%)', opacity: 1 }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration / 2 }}
    >
      <code className={`header__string header__string--${i}`}>{header[`tag${i}`]}</code>
    </motion.div>
  );
}
