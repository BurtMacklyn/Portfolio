/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { technologies } from '../lib/technologies.ts';

import CardSection from 'i/CardSection.tsx';
import { SectionTitle } from '../components/Typography.tsx';

export default function TechnologiesSection() {
  return (
    <section class={tw`my-16`}>
      <SectionTitle>Technologies</SectionTitle>

      <CardSection
        cards={technologies.map(tech => ({
          href: tech.link,
          title: tech.title,
          description: tech.description,
        }))}
      />
    </section>
  );
}
