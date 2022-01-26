import React from 'react';

import Wave from './Wave';
import Card from './Card';

import { motion } from 'framer-motion';

import animation from 'src/config/animation';

export default function Layout(): JSX.Element {
  return (
    <motion.div
      variants={{
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 }
      }}
      initial="from"
      exit="from"
      animate="to"
      transition={{ type: animation.function, duration: animation.duration / 1.5 }}
    >
      <div aria-hidden="true" className="experience-section__wave--wrapper">
        <Wave className="experience-section__wave experience-section__wave--hidden" />
        <Wave className="experience-section__wave experience-section__wave--visible" />
      </div>
      <div className="experience-section">
        <Card title={'React'} />
        <Card title={'Next'} />
        <Card title={'Javascript'} />
        <Card title={'NodeJs'} />
        <Card title={'Heroku'} />
        <Card title={'Sass'} />
        <Card title={'Figma'} />
        <Card title={'Css'} />
        <Card title={'Html'} />
        <Card title={'Express'} />
        <Card title={'MongoDB'} />
        <Card title={'Typescript'} />
        <Card title={'Java'} />
        <Card title={'Netlify'} />
        <Card title={'Vercel'} />
      </div>
    </motion.div>
  );
}
