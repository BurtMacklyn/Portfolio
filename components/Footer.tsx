/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

import { lastUpdated, margin, maxWidth, version } from 'lib/config.ts';
import { Link, Typography } from './Typography.tsx';

export default function Footer() {
  return (
    <footer class={tw`bg-g4`}>
      <div class={tw`${margin} mx-auto py-6 max-w-[${maxWidth}] flex flex-col gap-2`}>
        <Typography variant="p" class={tw`text-sm text-g80!`}>
          Last updated: {lastUpdated}
        </Typography>
        <Typography variant="p" class={tw`text-sm text-g80!`}>
          <Name /> Portfolio v{version}
        </Typography>
        <Typography variant="p" class={tw`text-sm text-g80!`}>
          Copyright © 2022 - All rights reserved by <Name />.
        </Typography>
        <Typography variant="p" class={tw`text-sm text-g80!`}>
          Site created and designed by <Name /> using Deno and Fresh (React)
        </Typography>
        <Typography variant="p" class={tw`text-sm text-g80!`}>
          <Link class={tw`text-primary! font-semibold`} href="https://www.github.com/cooperrunyan/cooperrunyan" newTab>
            View source code
          </Link>
          .
        </Typography>
      </div>
    </footer>
  );
}

const Name = () => (
  <Link newTab class={tw`text-primary font-semibold`} href="https://www.github.com/cooperrunyan">
    Cooper Runyan
  </Link>
);
