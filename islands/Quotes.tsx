/** @jsx h */

import { h } from 'preact';
import { tw } from '@twind';

export default function Quotes() {
  const quote = tw`font-normal leading-relaxed tracking-tight mt-6 w-full max-w-[36rem] text-g80`;
  const author = tw`text-white font-semibold`;

  return (
    <section class={tw`my-16`}>
      <h2 class={tw`lowercase font-semibold text-5xl tracking-tighter leading-none`}>Quotes.</h2>
      <p class={quote}>
        “If debugging is the process of removing software bugs, then programming must be the process of putting them in.” -{' '}
        <span class={author}>Edsger W. Dijkstra</span>
      </p>
      <p class={quote}>
        “Any application that can be written in Javascript, will eventually be written in Javascript.” - <span class={author}>Jeff Atwood</span>{' '}
      </p>
      <p class={quote}>
        “There are only two kinds of languages: the ones people complain about and the ones nobody uses.” - <span class={author}>Bjarne Stroustrup</span>
      </p>
      <p class={quote}>
        “C++ is such a bad language!” - <span class={author}>Linus Torvalds</span>
      </p>
    </section>
  );
}
