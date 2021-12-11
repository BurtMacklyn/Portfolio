import React from 'react';
import animation from 'animation';
import { motion } from 'framer-motion';
import { header } from '@content/experience';

export default function HeaderString(): JSX.Element {
  return (
    <motion.div
      variants={{
        from: { transform: `translateX(100%)`, opacity: 0, width: 'fit-content' },
        to: { transform: `translateX(0%)`, opacity: 1, width: 'fit-content' }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration / 2 }}
    >
      <code className="header__string">{header.string}</code>
    </motion.div>
  );
}
