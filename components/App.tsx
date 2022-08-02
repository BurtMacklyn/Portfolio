/** @jsx h */

import { Fragment, h } from 'preact';
import { tw } from 'twind';

import { Head } from './Head.tsx';

import Footer from '../islands/Footer.tsx';
import Nav from '../islands/Nav.tsx';

import { margin, maxWidth } from '../lib/config.ts';

export const App = ({ children }: { children: any }) => {
  return (
    <Fragment>
      <Head />
      <div class={tw`relative bg-black text-white mx-auto flex flex-col items-center`}>
        <div class={tw`w-full min-h-screen flex flex-col ${margin} max-w-[${maxWidth}] pt-22`}>
          <Nav />
          {children}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
