/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { technologies } from '../lib/technologies.ts';

import Card from 'c/Card.tsx';
import CoolCards from 'i/CoolCards.tsx';
import { SectionTitle } from '../components/Typography.tsx';

export default function TechnologiesSection() {
  return (
    <section class={tw`my-16`}>
      <SectionTitle>Technologies</SectionTitle>

      <CoolCards
        cards={technologies.map(tech => ({
          Component: Card,
          props: { href: tech.link, title: tech.title, description: tech.description },
        }))}
      />
    </section>
  );
}
