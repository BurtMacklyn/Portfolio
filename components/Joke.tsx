/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { useJoke } from '../hooks/useJoke.ts';

export default ({ children }: { children: ReturnType<typeof useJoke>['bf'] }) => {
  return (
    <section class={tw`mb-16`}>
      <div>
        <code aria-hidden class={tw`text-g50 break-all m:text-xs leading-none`}>
          {children}
        </code>
      </div>
    </section>
  );
};
