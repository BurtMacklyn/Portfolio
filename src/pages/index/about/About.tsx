import React from 'react';

import Card from './Card';
import Wave from './LowerWave';

import { about } from '@content/index';
import { motion } from 'framer-motion';
import animation from 'animation';

export default function About(): JSX.Element {
  return (
    <motion.div
      variants={{
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration }}
    >
      <section className="about">
        <div className="about__contents">
          <h2 className="bg-text">{about.bgText}</h2>
          <Card title={about.card1.title} content={about.card1.content} />
          <Card title={about.card2.title} content={about.card2.content} />
          <Card title={about.card3.title} content={about.card3.content} />
        </div>
      </section>
      <div aria-hidden="true" className="about__lower-wave--wrapper">
        <Wave className="about__lower-wave about__lower-wave--hidden" />
        <Wave className="about__lower-wave about__lower-wave--visible" />
      </div>
    </motion.div>
  );
}
