/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

import Header from '../islands/Header.tsx';
import Nav from '../islands/Nav.tsx';

import { maxWidth } from '../config.ts';

export default function Home() {
  return (
    <div class={tw`relative bg-black text-white mx-auto flex flex-col items-center`}>
      <div class={tw`w-full min-h-screen flex flex-col xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-4 mxl:px-32 max-w-[${maxWidth}]`}>
        <Nav />
        <Header />
      </div>
    </div>
  );
}
