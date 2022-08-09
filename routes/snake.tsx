/** @jsx h */
import { h } from 'preact';
import { config, tw } from 'style';

import Layout from 'c/Layout.tsx';

import { useEffect, useRef } from 'preact/hooks';

const theme = config.theme?.colors as any;

export default function Snake() {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', ' ', 'p'].includes(e.key))
        ref.current!.contentWindow!.postMessage({ type: 'snake-keyboard-event', key: e.key }, '*');
    };

    window.addEventListener('keydown', handler);
  }, []);

  return (
    <Layout noFooter>
      <iframe
        ref={ref}
        class={tw`h-[calc(100vh-11rem)] border-1 border-g8 rounded`}
        src={`https://cooperrunyan-snake.netlify.app/?showScore=false&primary=${encodeURIComponent(theme.secondary)}&secondary=${encodeURIComponent(
          theme.primary,
        )}&black=${encodeURIComponent(theme.black)}&white=${encodeURIComponent(theme.white)}&autoRestart=true`}
      />
    </Layout>
  );
}
