/** @jsx h */
import { Fragment, h } from 'preact';
import { config, tw } from 'style';

import { Head } from 'fresh/runtime.ts';

import Footer from 'c/Footer.tsx';
import Nav from 'i/Nav.tsx';

import type { useJoke } from 'hooks/useJoke.ts';
import { margin, maxWidth } from 'lib/config.ts';
import Banner from './Banner.tsx';

interface Props {
  children?: any;
  noFooter?: boolean;
  joke?: ReturnType<typeof useJoke>;
}

export default ({ children, noFooter, joke }: Props) => {
  return (
    <Fragment>
      <Head>
        <title>Cooper Runyan</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="theme" content={(config?.theme?.colors as any)?.black} />
        <meta name="description" content="Personal website for Cooper Runyan" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto+Mono:wght@400&display=swap" rel="prefetch" as="style" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div class={tw`relative bg-black text-white mx-auto flex flex-col items-center min-h-screen`}>
        {joke && <Banner>{joke.content}</Banner>}
        <Nav />
        <div class={tw`w-full flex flex-col ${margin} max-w-[${maxWidth}]`}>{children}</div>
      </div>
      {!noFooter && <Footer />}
    </Fragment>
  );
};
