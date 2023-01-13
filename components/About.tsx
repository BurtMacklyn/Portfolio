/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { SectionTitle } from './Typography.tsx';

export default function About() {
  return (
    <section class={tw`my-16`}>
      <SectionTitle>About</SectionTitle>
      <p
        class={tw`font-normal leading-relaxed tracking-tight mt-6 w-full max-w-[42rem] text-grey80`}>
        I'm a{' '}
        <span class={tw`text-white font-bold`}>
          {new Date().getFullYear() - 2021} year fullstack software developer
        </span>{' '}
        specializing in frontend web design/development and backend architecture
        with technologies like NodeJS, Deno, Docker, Go, NextJS, SCSS, and
        Typescript.
      </p>
    </section>
  );
}
