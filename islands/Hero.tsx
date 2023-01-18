/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

import { Typography } from 'c/Typography.tsx';
import Button from 'i/Button.tsx';
import { config } from 'config';

export default function Hero() {
  return (
    <div class={tw`mb-48 mt-32 md:my-32 height-sm:mt-12 mb-32`}>
      <Typography variant="h1" class={tw`text-primary`}>
        Cooper Runyan
      </Typography>
      <Typography variant="h1">fullstack web</Typography>
      <Typography variant="h1">
        developer<span class={tw`text-primary`}>{'.'}</span>
      </Typography>
      <div class={tw`mt-8 flex items-stretch gap-4`}>
        <Button href={`mailto:${config.email}`}>Contact</Button>
      </div>
    </div>
  );
}