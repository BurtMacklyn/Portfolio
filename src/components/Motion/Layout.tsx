import React from 'react';

import { motion } from 'framer-motion';

type Variants = {
  hidden: { opacity: number; x: number; y: number };
  enter: { opacity: number; x: number; y: number };
  exit: { opacity: number; x: number; y: number };
};

const defaultVariants: Variants = { hidden: { opacity: 1, x: 0, y: 0 }, enter: { opacity: 1, x: 0, y: 0 }, exit: { opacity: 1, x: 0, y: 0 } };

export default function Motion({ children, options = defaultVariants }: { children: React.ReactNode; options?: Variants }): JSX.Element {
  return (
    <motion.div variants={options} initial="hidden" exit="exit" transition={{ type: 'ease-in-out' }} className="" animate="enter">
      {children}
    </motion.div>
  );
}
