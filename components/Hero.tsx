/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

import { email } from 'lib/config.ts';
import { Typography } from './Typography.tsx';

export default function Hero() {
  return (
    <div class={tw`my-45 md:my-32 height-sm:mt-12 mb-32`}>
      <Typography variant="h1" class={tw`text-primary`}>
        Cooper Runyan
      </Typography>
      <Typography variant="h1">fullstack web</Typography>
      <Typography variant="h1">
        developer<span class={tw`text-primary`}>{'.'}</span>
      </Typography>
      <div class={tw`mt-8 flex items-stretch gap-4`}>
        <a
          class={tw`transition-all select-none py-3 px-4.5 rounded font-semibold tracking-tight leading-none border-1 border-current hover:text-primary text-black bg-white !hover:bg-black`}
          href={email}>
          Contact
        </a>
      </div>
    </div>
  );
}
