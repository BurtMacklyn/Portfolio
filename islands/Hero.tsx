/** @jsx h */

import { h } from 'preact';
import { tw } from '@twind';
import { email } from '../config.ts';

export default function Nav() {
  const commonText = tw`font-semibold text-8xl sm:text-7xl xxs:text-6xl tracking-tighter leading-none`;
  const commonLinks = tw`transition-all select-none py-3 px-4.5 rounded text-black font-semibold tracking-tight leading-none`;

  return (
    <div class={tw`my-45 md:my-32 height-sm:mt-12`}>
      <h1 class={commonText}>Cooper Runyan</h1>
      <h1 class={commonText}>fullstack web</h1>
      <h1 class={tw`${commonText} text-primary`}>developer</h1>
      <div class={tw`mt-8 flex items-stretch gap-4`}>
        <a class={tw`${commonLinks} text-black bg-white hover:text-white hover:bg-secondary`} href={email}>
          Contact
        </a>
        <a class={tw`${commonLinks} text-g60 bg-transparent border-1 border-current hover:text-primary dark:hover:text-secondary`} href="/technologies">
          Technologies
        </a>
      </div>
    </div>
  );
}
