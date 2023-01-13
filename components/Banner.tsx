/** @jsx h */
import { config } from 'config';
import { h } from 'preact';
import { tw } from 'style';

export default function Banner({ children: content }: { children: string }) {
  return (
    <div
      class={tw`w-full py-4 bg-grey4 flex items-center justify-center xs:hidden`}>
      <code
        aria-hidden
        class={tw`m:text-xs text-grey60 text-sm w-full max-w-[${config.maxWidth}] ${config.margin}`}>
        {content}
      </code>
    </div>
  );
}
