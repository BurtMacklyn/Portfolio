/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

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
        <Card
          className={cardClass}
          clickable
          onClick={click('https://nextjs.org/')}
          title="Next JS"
          description="A fullstack non-opinionated framework for React"
        />
        <Card
          className={cardClass}
          clickable
          onClick={click('https://reactjs.org/')}
          title="React"
          description="The world's most popular non-opinionated frontend UI framework."
        />
        <Card
          className={cardClass}
          clickable
          onClick={click('https://nodejs.org/')}
          title="NodeJS"
          description="Server-side JavaScript runtime built on Google Chrome's V8 JS engine."
        />
        <Card className={cardClass} clickable onClick={click('https://www.typescriptlang.org/')} title="TypeScript" description="A better JavaScript" />
        <Card
          className={cardClass}
          clickable
          onClick={click('https://deno.land')}
          title="Deno"
          description="The successor to NodeJS built in Rust and focused on TypeScript"
        />
        <Card className={cardClass} clickable onClick={click('https://sass-lang.com/')} title="SCSS" description="The TypeScript of CSS" />
        <Card className={cardClass} clickable onClick={click('https://expressjs.com/')} title="Express" description="Node library for http server creation." />
        <Card className={cardClass} clickable onClick={click('https://www.docker.com/')} title="Docker" description="Containerization for apps" />
        <Card
          className={cardClass}
          clickable
          onClick={click('https://fresh.deno.dev')}
          title="Fresh"
          description="React framework built in Deno (used for this site)"
        />
      </div>
    </section>
  );
}
