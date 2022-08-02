/** @jsx h */

import { h } from 'preact';
import { tw } from '@twind';
import { jokes } from '../lib/jokes.ts';

export default function JokeSection() {
  const joke = jokes[new Date().getDate() % jokes.length];

  return (
    <section class={tw`mb-16`}>
      <Joke content={joke.content}>{joke.bf}</Joke>
    </section>
  );
}

const Joke = ({ children, content }: { children: string; content: string }) => {
  const shared = tw`m:text-xs sm:leading-none leading-none`;
  return (
    <div>
      <code aria-hidden class={tw`${shared} text-white`}>
        {content}
      </code>
      <br />
      <code aria-hidden class={tw`text-g40 break-all ${shared}`}>
        {children}
      </code>
    </div>
  );
};