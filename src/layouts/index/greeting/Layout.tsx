import React from 'react';
import { motion } from 'framer-motion';
import animation from 'src/config/animation';
import random from './sentence';

import { useState, useEffect, useRef } from 'react';

export default function Layout(): JSX.Element {
  const [sentence, setSentence] = useState('Have a nice day!');
  const isMounted = useRef(false);

  useEffect(() => {
    setSentence(random());
  }, []);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    // prettier-ignore
    (async () => { return new Promise<void>(resolve => setTimeout(() => { resolve() }, 10000)); })().then(() => {
      // Generates a promise that resloves after 10 seconds
      isMounted.current && setSentence(random());
    })
    ;
    return () => {};
  }, []);

  return (
    <section className="have-a-nice-day">
      <motion.h2
        variants={{
          from: { transform: `translateX(-100%)`, color: 'rgba(171, 178, 191, 0)' },
          to: { transform: `translateX(0%)`, color: 'rgba(171, 178, 191, 0.5)' }
        }}
        initial="from"
        exit="from"
        animate="to"
        transition={{ type: animation.function, duration: animation.duration / 2 }}
        className="have-a-nice-day__text"
      >
        {sentence}
      </motion.h2>
    </section>
  );
}
