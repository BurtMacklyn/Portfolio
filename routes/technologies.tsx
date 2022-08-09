/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

import Card from 'c/Card.tsx';
import Layout from 'c/Layout.tsx';

import { technologies } from 'lib/technologies.ts';

export default function Technologies() {
  const cardClass = tw`flex-grow-1 flex-shrink-1 basis-96`;
  const click = (link: string) => () => window.open(link, '_blank');

  return (
    <Layout>
      <section class={tw`my-16`}>
        <h2 class={tw`lowercase font-semibold text-5xl tracking-tighter leading-none`}>Technologies.</h2>
        <div class={tw`flex flex-wrap flex-row mt-8 gap-4`}>
          {technologies.map(tech => (
            <Card onClick={click(tech.link)} className={cardClass} clickable {...tech} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
