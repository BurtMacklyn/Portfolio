/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { Link, SectionTitle, Typography } from './Typography.tsx';

const quotes = [
  {
    content:
      'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
    author: 'Edsger W. Dijkstra',
    description: 'creator of the Dijkstra pathfinding algothrim',
  },
  {
    content:
      'Any application that can be written in Javascript, will eventually be written in Javascript.',
    author: 'Jeff Atwood',
    description: 'creator of Stack Overflow',
  },
  {
    content:
      'There are only two kinds of languages: the ones people complain about and the ones nobody uses.',
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
  return (
    <section class={tw`my-16`}>
      <SectionTitle>Quotes</SectionTitle>
      {quotes.map(quote => (
        <Typography
          variant="p"
          key={quote.content}
          class={tw`mt-6 max-w-[36rem]!`}>
          “{quote.content}” -{' '}
          <Link
            newTab
            href={`https://www.google.com/search?q=${encodeURIComponent(
              quote.author,
            )}`}
            class={tw`font-semibold`}>
            {quote.author}
          </Link>
          , <span class={tw`text-grey60`}>{quote.description}</span>
        </Typography>
      ))}
    </section>
  );
}
