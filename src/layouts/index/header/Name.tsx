import React from 'react';

import { header } from 'src/content/index';

import { motion } from 'framer-motion';
import animation from 'src/config/animation';

export default function Name(): JSX.Element {
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
    >
      <h1 className="header__name">
        {header.firstname} <br className="name-break" /> {header.lastname}
      </h1>
    </motion.div>
  );
}
