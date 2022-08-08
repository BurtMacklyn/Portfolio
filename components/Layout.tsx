/** @jsx h */
import { Fragment, h } from 'preact';
import { config, tw } from 'style';

import { Head } from 'fresh/runtime.ts';

import Footer from 'c/Footer.tsx';
import Nav from 'c/Nav.tsx';

import { margin, maxWidth } from 'lib/config.ts';

export default ({ children }: { children: any }) => {
  return (
    <Fragment>
      <Head>
        <title>Cooper Runyan</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="theme" content={(config?.theme?.colors as any)?.black} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto+Mono:wght@400&display=swap" rel="prefetch" as="style" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
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
