/** @jsx h */
import { h } from 'preact';

import { JokeType, useJoke } from 'hooks/useJoke.ts';

import About from 'c/About.tsx';
import Joke from 'c/Joke.tsx';
import Layout from 'c/Layout.tsx';
import Quotes from 'c/Quotes.tsx';

import ContactSection from 'i/ContactSection.tsx';
import Hero from 'i/Hero.tsx';
import TechnologiesSection from 'i/TechnologiesSection.tsx';

export default function Home() {
  const joke = useJoke(JokeType.Temporal);

  return (
    <Layout joke={joke}>
      <Hero />
      <Joke>{joke.bf}</Joke>
      <TechnologiesSection />
      <About />
      <Quotes />
      <ContactSection />
    </Layout>
  );
}
