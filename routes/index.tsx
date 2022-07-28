/** @jsx h */
import { Fragment, h } from 'preact';
import { tw } from '@twind';

import { margin, maxWidth } from '../config.ts';

import Nav from '../islands/Nav.tsx';
import Hero from '../islands/Hero.tsx';
import Brainfuck from '../islands/Brainfuck.tsx';
import TechnologiesSection from '../islands/TechnologiesSection.tsx';
import About from '../islands/About.tsx';
import Quotes from '../islands/Quotes.tsx';
import Contact from '../islands/Contact.tsx';
import Footer from '../islands/Footer.tsx';

export default function Home() {
  return (
    <Fragment>
      <title>Cooper Runyan</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/style/base.css" />
      <div class={tw`relative bg-black text-white mx-auto flex flex-col items-center`}>
        <div class={tw`w-full min-h-screen flex flex-col ${margin} max-w-[${maxWidth}] pt-22`}>
          <Nav />
          <Hero />
          <Brainfuck />
          <TechnologiesSection />
          <About />
          <Quotes />
          <Contact />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
