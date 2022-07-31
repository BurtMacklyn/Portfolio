/** @jsx h */
import { Fragment, h } from 'preact';
import { tw } from '@twind';

import { margin, maxWidth } from '../config.ts';

import Nav from '../islands/Nav.tsx';
import Hero from '../islands/Hero.tsx';
import Joke from '../islands/Joke.tsx';
import TechnologiesSection from '../islands/TechnologiesSection.tsx';
import About from '../islands/About.tsx';
import Quotes from '../islands/Quotes.tsx';
import ContactSection from '../islands/ContactSection.tsx';
import Footer from '../islands/Footer.tsx';
import { Head } from '../components/Head.tsx';

export default function Home() {
  return (
    <Fragment>
      <Head />
      <div class={tw`relative bg-black text-white mx-auto flex flex-col items-center`}>
        <div class={tw`w-full min-h-screen flex flex-col ${margin} max-w-[${maxWidth}] pt-22`}>
          <Nav />
          <Hero />
          <Joke />
          <TechnologiesSection />
          <About />
          <Quotes />
          <ContactSection />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
