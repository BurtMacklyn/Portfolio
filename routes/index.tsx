/** @jsx h */
import { h } from 'preact';

import About from 'i/About.tsx';
import ContactSection from 'i/ContactSection.tsx';
import Quotes from 'i/Quotes.tsx';
import TechnologiesSection from 'i/TechnologiesSection.tsx';

import Layout from 'c/Layout.tsx';
import Hero from 'c/Hero.tsx';
import JokeSection from 'c/Joke.tsx';

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
