/** @jsx h */
import { config } from 'config';
import { h } from 'preact';
import { tw } from 'style';

import { Link, Typography } from './Typography.tsx';

export default function Footer() {
  return (
    <footer class={tw`bg-grey4`}>
      <div
        class={tw`${config.margin} mx-auto py-6 max-w-[${config.maxWidth}] flex flex-col gap-2`}>
        <Typography variant="p" class={tw`text-sm text-grey80!`}>
          Last updated: {config.lastUpdated}
        </Typography>
        <Typography variant="p" class={tw`text-sm text-grey80!`}>
          <Name /> Portfolio v{config.version}
        </Typography>
        <Typography variant="p" class={tw`text-sm text-grey80!`}>
          Copyright © 2022 - All rights reserved by <Name />.
        </Typography>
        <Typography variant="p" class={tw`text-sm text-grey80!`}>
          Site created and designed by <Name /> using Deno and Fresh (React)
        </Typography>
        <Typography variant="p" class={tw`text-sm text-grey80!`}>
          <Link
            class={tw`text-primary! font-semibold`}
            href="https://www.github.com/cooperrunyan/cooperrunyan"
            newTab>
            View source code
          </Link>
          .
        </Typography>
      </div>
    </footer>
  );
}

const Name = () => (
  <Link
    newTab
    class={tw`text-primary font-semibold`}
    href="https://www.github.com/cooperrunyan">
    Cooper Runyan
  </Link>
);
