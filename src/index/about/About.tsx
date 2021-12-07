import React from 'react';

import Card from './Card';
import Wave from './LowerWave';

import { about } from '../../content/index';

export default function About(): JSX.Element {
  return (
    <>
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
    </>
  );
}
