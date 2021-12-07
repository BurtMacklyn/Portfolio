import React from 'react';

import HaveANiceDay from '@index/haveANiceDay/HaveANiceDay';
import Rocket from './Rocket';

import { experience } from '@content/index';

export default function Main(): JSX.Element {
  return (
    <section className="experience">
      <div aria-hidden="true" className="experience__glow experience__glow--1"></div>
      <div className="experience__content--wrapper">
        <div className="experience__content">
          <h2 className="experience__heading">{experience.heading}</h2>
          <p className="experience__text">{experience.content}</p>
        </div>
        <Rocket />
        <div aria-hidden="true" className="experience__glow experience__glow--2"></div>
      </div>
      <HaveANiceDay />
    </section>
  );
}
