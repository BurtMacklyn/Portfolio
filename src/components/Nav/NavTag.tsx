import React from 'react';

import { motion } from 'framer-motion';
import animation from 'animation';
import Tag from '@components/Tag';

export default function Main({ i }: { i: 1 | 2 }): JSX.Element {
  return (
    <motion.div
      className={`nav__tag nav__tag--${i === 1 ? 'open' : 'close'}`}
      variants={{
        from: { transform: `translate(${i === 1 ? '' : '-'}100%, ${i === 1 ? '-' : ''}100%)`, opacity: 0 },
        to: { transform: `translate(${i === 1 ? '-' : ''}100%, ${i === 1 ? '-' : ''}100%)`, opacity: 1 }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration / 3 }}
    >
      <Tag>{i === 2 && '/'}nav</Tag>
    </motion.div>
  );
}
