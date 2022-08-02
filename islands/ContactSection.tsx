/** @jsx h */

import { h } from 'preact';
import { tw } from '@twind';
import { email } from '../lib/config.ts';

export default function ContactSection() {
  const button = tw`transition-all select-none border-1 border-current text-g40 font-semibold leading-none tracking-tight py-3 px-4.5 rounded hover:text-secondary`;

  return (
    <section class={tw`my-16`}>
      <h2 class={tw`lowercase font-semibold text-5xl tracking-tighter leading-none`}>Contact.</h2>
      <p class={tw`font-normal leading-relaxed tracking-tight mt-6`}>Let's get in touch!</p>
      <div class={tw`flex flex-wrap gap-4 mt-6`}>
        <a href={email} target="_blank" class={tw`${button} text-black bg-white hover:bg-black`}>
          Email
        </a>
        <a href="https://www.linkedin.com/in/cooper-runyan-52a343225/" target="_blank" class={button}>
          LinkedIn
        </a>
        <a href="https://www.github.com/cooperrunyan" target="_blank" class={button}>
          Github
        </a>
        <a href="https://stackoverflow.com/users/17047560/cooper-runyan" target="_blank" class={button}>
          Stack Overflow
        </a>
        <a href="https://codepen.io/cooperrunyan" target="_blank" class={button}>
          Codepen
        </a>
      </div>
    </section>
  );
}
