import React from 'react';

import { error } from '@content/global';
import Router from 'next/router';
import { motion } from 'framer-motion';
import animation from 'animation';

export default function Main(): JSX.Element {
  return (
    <main className="error">
      <motion.div
        variants={{
          from: { opacity: 0, transform: 'translateY(-200%)' },
          to: { opacity: 1, transform: 'translateY(0%)' }
        }}
        initial="from"
        exit="from"
        animate="to"
        transition={{ type: 'linear', duration: animation.duration / 2 }}
        onClick={() => Router.back()}
        className="back"
      >
        {error.backBtn}
      </motion.div>
      <header className="header">
        <div className="code__wrapper">
          <motion.span
            variants={{
              from: { opacity: 0, transform: 'translateX(100%)' },
              to: { opacity: 1, transform: 'translateX(0%)' }
            }}
            initial="from"
            exit="from"
            animate="to"
            transition={{ type: 'linear', duration: animation.duration / 2 }}
            className="code"
          >
            {error.code}
          </motion.span>
        </div>
        <motion.span
          variants={{
            from: { opacity: 0, height: '0em' },
            to: { opacity: 1, height: '1.75em' }
          }}
          initial="from"
          exit="from"
          animate="to"
          transition={{ type: 'linear', duration: animation.duration / 2 }}
          className="split"
        ></motion.span>
        <div className="message__wrapper">
          <motion.span
            variants={{
              from: { opacity: 0, transform: 'translateX(-100%)' },
              to: { opacity: 1, transform: 'translateX(0%)' }
            }}
            initial="from"
            exit="from"
            animate="to"
            transition={{ type: 'linear', duration: animation.duration / 2 }}
            className="message"
          >
            {error.message}
          </motion.span>
        </div>
      </header>
    </main>
  );
}
