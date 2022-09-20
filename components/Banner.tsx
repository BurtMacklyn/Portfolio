/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { margin, maxWidth } from '../lib/config.ts';

export default function Banner({ children: content }: { children: string }) {
  return (
    <div class={tw`w-full py-4 bg-g6 flex items-center justify-center xs:hidden`}>
      <code aria-hidden class={tw`m:text-xs text-g60 text-sm w-full max-w-[${maxWidth}] ${margin}`}>
        {content}
      </code>
    </div>
  );
}
