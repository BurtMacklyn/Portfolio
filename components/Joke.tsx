/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { useJoke } from '../hooks/useJoke.ts';
import { Typography } from './Typography.tsx';

export default ({ children }: { children: ReturnType<typeof useJoke>['bf'] }) => {
  return (
    <section class={tw`mb-16`}>
      <div>
        <Typography variant="code" class={tw`break-all m:text-xs leading-none`}>
          {children}
        </Typography>
      </div>
    </section>
  );
};
