import React, { ReactNode, ReactPortal } from 'react';

import { motion } from 'framer-motion';
import animation from 'src/config/animation';

export default function Motion({ children, i }: { children: ReactNode | ReactPortal; i: number }): JSX.Element {
  return (
    <motion.li
      variants={{
        from: { opacity: 0, transform: 'translateY(9.2rem)' },
        to: { opacity: 1, transform: 'translateY(0rem)' }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{
        type: animation.function,
        duration: animation.duration / 5,
        delay: i * 0.3 * (animation.duration / 5)
      }}
      className={`menu__btn--${i}`}
    >
      {children}
    </motion.li>
  );
}
