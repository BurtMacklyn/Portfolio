import { motion } from 'framer-motion';

export default function Motion({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 0 }
      }}
      initial="hidden"
      exit="exit"
      transition={{ type: 'linear' }}
      className=""
      animate="enter"
    >
      {children}
    </motion.div>
  );
}
