/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { colors } from '../lib/config.ts';

import Layout from 'c/Layout.tsx';

export default function Snake() {
  return (
    <Layout noFooter>
      <iframe
        class={tw`h-[calc(100vh-11rem)] border-1 border-g8 rounded`}
        src={`https://aisnake.netlify.app/?primary=${encodeURIComponent(colors.white)}&secondary=${encodeURIComponent(colors.primary)}&bg=${encodeURIComponent(
          colors.black,
        )}&fg=${encodeURIComponent(colors.white)}&tickRate=10&unitSize=30`}
      />
    </Layout>
  );
}
