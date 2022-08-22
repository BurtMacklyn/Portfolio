/** @jsx h */
import { h } from 'preact';

import About from 'c/About.tsx';
import ContactSection from 'c/ContactSection.tsx';
import Quotes from 'c/Quotes.tsx';

import Hero from 'c/Hero.tsx';
import Joke from 'c/Joke.tsx';
import Layout from 'c/Layout.tsx';
import TechnologiesSection from 'c/TechnologiesSection.tsx';
import { JokeType, useJoke } from 'hooks/useJoke.ts';

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
