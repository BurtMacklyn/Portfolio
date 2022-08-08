/** @jsx h */
import { Fragment, h } from 'preact';
import { tw } from 'style';

import Footer from 'i/Footer.tsx';
import Nav from 'c/Nav.tsx';

import { margin, maxWidth } from 'lib/config.ts';

export default ({ children }: { children: any }) => {
  return (
    <Fragment>
      <title>Cooper Runyan</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <meta name="theme" content="#000" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
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
