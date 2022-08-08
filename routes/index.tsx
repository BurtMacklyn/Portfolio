/** @jsx h */
import { h } from 'preact';

import About from 'c/About.tsx';
import ContactSection from 'c/ContactSection.tsx';
import Quotes from 'c/Quotes.tsx';

import Hero from 'c/Hero.tsx';
import JokeSection from 'c/Joke.tsx';
import Layout from 'c/Layout.tsx';
import TechnologiesSection from 'c/TechnologiesSection.tsx';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <JokeSection />
      <TechnologiesSection />
      <About />
      <Quotes />
      <ContactSection />
    </Layout>
  );
}
