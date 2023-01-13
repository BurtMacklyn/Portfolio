/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';
import { config } from 'config';

import Layout from 'c/Layout.tsx';

export default function Snake() {
  return (
    <Layout noFooter>
      <iframe
        class={tw`h-[calc(100vh-11rem)] border-1 border-grey8 rounded`}
        src={`https://aisnake.netlify.app/?primary=${encodeURIComponent(
          config.colors.white,
        )}&secondary=${encodeURIComponent(
          config.colors.primary,
        )}&bg=${encodeURIComponent(
          config.colors.black,
        )}&fg=${encodeURIComponent(
          config.colors.white,
        )}&tickRate=10&unitSize=30`}
      />
    </Layout>
  );
}
