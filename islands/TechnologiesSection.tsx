/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { technologies } from '../lib/technologies.ts';

import Card from 'c/Card.tsx';
import { useState } from 'preact/hooks';
import { SectionTitle } from '../components/Typography.tsx';

export default function TechnologiesSection() {
  const cardClass = tw`flex-grow-1 flex-shrink-1 basis-96`;

  const [hover, setHover] = useState(false);
  const [target, setTarget] = useState({ x: 0, y: 0 });

  return (
    <section class={tw`my-16`}>
      <SectionTitle>Technologies</SectionTitle>

      <div
        class={tw`technology-cards flex flex-wrap flex-row gap-2`}
        onMouseMove={e => {
          setTarget({ x: e.clientX, y: e.clientY });
          setHover(true);
        }}
        onMouseOut={() => setHover(false)}>
        {technologies.map(tech => (
          <Card className={cardClass} href={tech.link} title={tech.title} description={tech.description} target={target} hover={hover} />
        ))}
      </div>
    </section>
  );
}
