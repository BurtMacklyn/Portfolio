/** @jsx h */
import { Fragment, h } from 'preact';
import { tw } from '@twind';

import { margin, maxWidth } from '../config.ts';

import Nav from '../islands/Nav.tsx';
import TechnologiesPage from '../islands/TechnologiesPage.tsx';
import Footer from '../islands/Footer.tsx';

export default function Technologies() {
  return (
    <Fragment>
      <title>Cooper Runyan</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/style/base.css" />
      <div class={tw`relative bg-black text-white mx-auto flex flex-col items-center`}>
        <div class={tw`w-full min-h-screen flex flex-col ${margin} max-w-[${maxWidth}] pt-22`}>
          <Nav />
          <TechnologiesPage />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
