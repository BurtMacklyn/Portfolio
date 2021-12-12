import React, { ReactChild, ReactNode } from 'react';
import animation from 'animation';
import { motion } from 'framer-motion';

export default function Section({ children, className, outline }: { children: ReactChild | ReactNode; className: string; outline?: string }): JSX.Element {
  return (
    <motion.div
      variants={{
        from: { opacity: 0, outline: `${outline || '5px'} solid #abb2bf00` },
        to: { opacity: 1, outline: `${outline || '5px'} solid #abb2bf` }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
