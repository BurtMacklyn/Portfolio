/** @jsx h */

import { h } from 'preact';
import { tw } from '@twind';

export default function Nav() {
  const commonText = tw`font-semibold text-8xl sm:text-7xl tracking-tighter leading-none`;
  const commonLinks = tw`transition-all py-3 px-4.5 rounded text-black font-semibold tracking-tight leading-none`;

  return (
    <div class={tw`mt-45 md:mt-32`}>
      <h1 class={commonText}>Cooper Runyan</h1>
      <h1 class={commonText}>fullstack web</h1>
      <h1 class={tw`${commonText} text-primary`}>developer</h1>
      <div class={tw`mt-8 flex items-stretch gap-4`}>
        <a class={tw`${commonLinks} bg-white hover:bg-secondary hover:text-white`} href="/contact">
          Contact
        </a>
        <a class={tw`${commonLinks} text-g60 bg-transparent	border-1 border-current hover:text-secondary`} href="/technologies">
          Technologies
        </a>
      </div>
    </div>
  );
}
