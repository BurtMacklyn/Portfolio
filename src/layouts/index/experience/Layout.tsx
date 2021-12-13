import React from 'react';

import HaveANiceDay from '../greeting/Layout';
import Rocket from './Rocket';

import { experience } from 'src/content/index';
import { motion } from 'framer-motion';

import Section from './Section';

import Glow from './Glow';

export default function Layout(): JSX.Element {
  return (
    <motion.div>
      <section className="experience">
        <Glow i={1} />
        <Section className="experience__content--wrapper">
          <Section outline="0px" className="experience__content">
            <h2 className="experience__heading">{experience.heading}</h2>
            <p className="experience__text">{experience.content}</p>
          </Section>
          <Rocket />
          <Glow i={2} />
        </Section>
        <HaveANiceDay />
      </section>
    </motion.div>
  );
}
