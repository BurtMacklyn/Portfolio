/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

import { email } from 'lib/config.ts';

export default function Hero() {
  const commonText = tw`font-bold text-8xl sm:text-7xl xxs:text-6xl tracking-tighter leading-none`;

  return (
    <div class={tw`my-45 md:my-32 height-sm:mt-12 mb-32`}>
      <h1 class={tw`${commonText} text-primary`}>Cooper Runyan</h1>
      <h1 class={commonText}>fullstack web</h1>
      <h1 class={commonText}>developer</h1>
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
