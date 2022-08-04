/** @jsx h */
import { h } from 'preact';

import { App } from '../components/App.tsx';
import JokeSection from '../components/Joke.tsx';
import About from '../islands/About.tsx';
import ContactSection from '../islands/ContactSection.tsx';
import Hero from '../islands/Hero.tsx';
import Quotes from '../islands/Quotes.tsx';
import TechnologiesSection from '../islands/TechnologiesSection.tsx';

export default function Home() {
  return (
    <App>
      <Hero />
      <JokeSection />
      <TechnologiesSection />
      <About />
      <Quotes />
      <ContactSection />
    </App>
  );
}
