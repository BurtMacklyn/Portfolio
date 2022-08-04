/** @jsx h */

import { tw } from '@twind';
import { h } from 'preact';
import { lastUpdated, margin, maxWidth, version } from '../lib/config.ts';

export default function Footer() {
  return (
    <footer class={tw`bg-g4 text-g80`}>
      <div class={tw`${margin} mx-auto py-6 max-w-[${maxWidth}] flex flex-col gap-2`}>
        <p class={tw`text-sm`}>Last updated: {lastUpdated}</p>
        <p class={tw`text-sm`}>
          {name} Portfolio v{version}
        </p>
        <p class={tw`text-sm`}>Copyright © 2022 - All rights reserved by {name}.</p>
        <p class={tw`text-sm`}>Site created and designed by {name} using Deno and Fresh (React)</p>
        <p class={tw`text-sm`}>
          View source code{' '}
          <a class={tw`text-secondary`} href="https://www.github.com/cooperrunyan/cooperrunyan" aria-content="View repository">
            here
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

const name = (
  <a class={tw`text-sm text-secondary`} href="https://www.github.com/cooperrunyan">
    Cooper Runyan
  </a>
);
