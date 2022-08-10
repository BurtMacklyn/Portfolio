/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { technologies } from '../lib/technologies.ts';

import Card from './Card.tsx';

export default function TechnologiesSection() {
  const cardClass = tw`flex-grow-1 flex-shrink-1 basis-96`;

  return (
    <section class={tw`my-16`}>
      <h2 class={tw`lowercase font-semibold text-5xl tracking-tighter leading-none`}>Technologies.</h2>

      <div class={tw`flex flex-wrap flex-row mt-16 gap-4`}>
        {technologies.map(tech => (
          <Card className={cardClass} clickable href={tech.link} title={tech.title} description={tech.description} />
        ))}
      </div>
    </section>
  );
}
