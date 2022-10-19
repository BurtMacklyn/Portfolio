/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { technologies } from '../lib/technologies.ts';

import Card from 'c/Card.tsx';
import { useState } from 'preact/hooks';

export default function TechnologiesSection() {
  const cardClass = tw`flex-grow-1 flex-shrink-1 basis-96`;

  const [hover, setHover] = useState(false);
  const [target, setTarget] = useState({ x: 0, y: 0 });

  return (
    <section class={tw`my-16`}>
      <h2 class={tw`lowercase font-semibold text-5xl tracking-tighter leading-none`}>Technologies.</h2>

      <div
        class={tw`technology-cards flex flex-wrap flex-row mt-16 gap-2`}
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
