/** @jsx h */
import { h } from 'preact';

import Layout from 'c/Layout.tsx';
import Snake from 'i/Snake.tsx';

export default function () {
  return (
    <Layout noFooter>
      <Snake />
    </Layout>
  );
}
