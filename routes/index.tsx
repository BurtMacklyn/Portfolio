/** @jsx h */
import { h } from 'preact';

import Hero from '../islands/Hero.tsx';
import JokeSection from '../components/Joke.tsx';
import TechnologiesSection from '../islands/TechnologiesSection.tsx';
import About from '../islands/About.tsx';
import Quotes from '../islands/Quotes.tsx';
import ContactSection from '../islands/ContactSection.tsx';
import { App } from '../components/App.tsx';

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
