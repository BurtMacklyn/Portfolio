/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

import { jokes } from 'lib/jokes.ts';
import { Typography } from './Typography.tsx';

interface Props {
  code: string;
  message: string;
}

export default function Error({ code, message }: Props) {
  const joke = jokes[Math.floor(Math.random() * jokes.length)];

  const commonLinks = tw`transition-all select-none py-3 px-4.5 rounded font-semibold tracking-tight leading-none border-1 border-current hover:text-primary`;

  return (
    <div>
      <div class={tw`my-40 md:my-32 height-sm:mt-12`}>
        <Typography variant="h1">Error</Typography>
        <Typography variant="h1">{message}</Typography>
        <Typography variant="h1" class={tw`text-tertiary`}>
          Code {code}
        </Typography>
        <div class={tw`mt-8 flex items-stretch gap-4`}>
          <a class={tw`${commonLinks} text-black bg-white !hover:bg-black`} href="/">
            Home page
          </a>
        </div>
      </div>
      <div>
        <code aria-hidden class={tw`m:text-xs sm:leading-none leading-none text-white`}>
          {joke.content}
        </code>
      </div>
    </div>
  );
}
