import React from 'react';
import animation from 'animation';
import { motion } from 'framer-motion';
import { header } from '@content/experience';

export default function HeaderTitle(): JSX.Element {
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
      <h1 className="header__title">{header.title}</h1>
    </motion.div>
  );
}
