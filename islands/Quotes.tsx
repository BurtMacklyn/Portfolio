/** @jsx h */
import { h } from 'preact';

import { tw } from '@twind';

const quotes = [
  {
    content: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
    author: 'Edsger W. Dijkstra',
    description: 'creator of the Dijkstra pathfinding algothrim',
  },
  {
    content: 'Any application that can be written in Javascript, will eventually be written in Javascript.',
    author: 'Jeff Atwood',
    description: 'creator of Stack Overflow',
  },
  {
    content: 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.',
    author: 'Bjarne Stroustrup',
    description: 'creator of C++',
  },
  {
    content: 'C++ is such a bad language!',
    author: 'Linus Torvalds',
    description: 'creator of Linux and Git',
  },
];

export default function Quotes() {
  const quoteClass = tw`font-normal leading-relaxed tracking-tight mt-6 w-full max-w-[36rem] text-g80`;
  const authorClass = tw`text-white font-semibold transition hover:text-secondary`;
  const descriptionClass = tw`text-g60`;

  return (
    <section class={tw`my-16`}>
      <h2 class={tw`lowercase font-semibold text-5xl tracking-tighter leading-none`}>Quotes.</h2>
      {quotes.map(quote => (
        <p key={quote.content} class={quoteClass}>
          “{quote.content}” -{' '}
          <a target="_blank" href={`https://www.google.com/search?q=${encodeURIComponent(quote.author)}`} class={authorClass}>
            {quote.author}
          </a>
          , <span class={descriptionClass}>{quote.description}</span>
        </p>
      ))}
    </section>
  );
}
