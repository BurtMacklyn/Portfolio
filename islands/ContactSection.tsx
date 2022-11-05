/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

import { SectionTitle } from 'c/Typography.tsx';
import { email } from 'lib/config.ts';
import CoolCards from '../islands/CoolCards.tsx';

const contacts = [
  { place: 'Email', url: email, description: 'A great method of proffessional communication. Click here to get a conversation started.' },
  { place: 'LinkedIn', url: 'https://www.linkedin.com/in/cooper-runyan-52a343225/', description: 'Connect with me, learn more about my career.' },
  {
    place: 'Github',
    url: 'https://www.github.com/cooperrunyan',
    description: 'Where I store all of my projects, most of which are public repositories. Click here to gain some insight for what I do.',
  },
  {
    place: 'Codepen',
    url: 'https://codepen.io/cooperrunyan',
    description: 'Where I play around with HTML and CSS. Check out some small snippets of code here.',
  },
];

export default function ContactSection() {
  return (
    <section class={tw`my-16`}>
      <SectionTitle>Contact</SectionTitle>
      <CoolCards
        cards={contacts.map(contact => ({
          href: contact.url,
          title: contact.place,
          description: contact.description,
        }))}
      />
    </section>
  );
}
