/** @jsx h */

import { h } from 'preact';
import { tw } from '@twind';

export default function About() {
  return (
    <section class={tw`my-16`}>
      <h2 class={tw`lowercase font-semibold text-5xl tracking-tighter leading-none`}>About.</h2>
      <p class={tw`font-normal leading-relaxed tracking-tight mt-6 w-full max-w-[42rem] text-g80`}>
        I'm a <span class={tw`text-white font-bold`}>{new Date().getFullYear() - 2019} year fullstack software developer</span> specializing in frontend web
        design/development and backend architecture with technologies like HTML, NodeJS, Deno, Docker, Go, NextJS, React, SCSS, and Typescript.
      </p>
    </section>
  );
}
