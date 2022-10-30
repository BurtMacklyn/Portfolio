/** @jsx h */
import { h } from 'preact';
import { config, tw } from 'style';

import Layout from 'c/Layout.tsx';

const theme = config.theme?.colors as any;

export default function Snake() {
  return (
    <Layout noFooter>
      <iframe
        class={tw`h-[calc(100vh-11rem)] border-1 border-g8 rounded`}
        src={`https://aisnake.netlify.app/?primary=${encodeURIComponent(theme.secondary)}&secondary=${encodeURIComponent(
          theme.primary,
        )}&bg=${encodeURIComponent(theme.black)}&fg=${encodeURIComponent(theme.white)}&tickRate=10&unitSize=30`}
      />
    </Layout>
  );
}
