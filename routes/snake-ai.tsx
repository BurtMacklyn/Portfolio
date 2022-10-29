/** @jsx h */
import { h } from 'preact';
import { config, tw } from 'style';

import Layout from 'c/Layout.tsx';

import { useEffect, useRef } from 'preact/hooks';
import { useMediaQuery } from '../hooks/useMediaQuery.ts';

const theme = config.theme?.colors as any;

export default function Snake() {
  const matches = useMediaQuery('screen');

  return (
    <Layout noFooter>
      {!matches && (
        <iframe
          class={tw`h-[calc(100vh-11rem)] border-1 border-g8 rounded`}
          src={`https://aisnake.netlify.app/?primary=${encodeURIComponent(theme.secondary)}&secondary=${encodeURIComponent(
            theme.primary,
          )}&bg=${encodeURIComponent(theme.black)}&fg=${encodeURIComponent(theme.white)}&tickRate=40`}
        />
      )}
      {matches && (
        <div class={tw`mt-12`}>
          <h1 class={tw`font-bold text-7xl sm:text-6xl xxs:text-5xl tracking-tighter leading-none`}>Your device is not supported for snake</h1>
        </div>
      )}
    </Layout>
  );
}
