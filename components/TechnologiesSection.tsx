/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { technologies } from '../lib/technologies.ts';

import Card from './Card.tsx';

export default function TechnologiesSection() {
  const cardClass = tw`flex-grow-1 flex-shrink-1 basis-96`;
  const click = (link: string) => () => window.open(link, '_blank');

  return (
    <section class={tw`my-16`}>
      <h2 class={tw`lowercase font-semibold text-5xl tracking-tighter leading-none`}>Technologies.</h2>
      <p class={tw`font-normal leading-none tracking-tight text-g60 mt-6`}>
        <a class={tw`transition text-secondary`} href="/technologies" aria-label="View a full list of technologies">
          View full list
        </a>
        .
      </p>
      <div class={tw`flex flex-wrap flex-row mt-16 gap-4`}>
        {technologies.slice(0, 9).map(tech => (
          <Card className={cardClass} clickable onClick={click(tech.link)} title={tech.title} description={tech.description} />
        ))}
      </div>
    </section>
  );
}
