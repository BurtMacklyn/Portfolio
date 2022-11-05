/** @jsx h */
import { h } from 'preact';

import Layout from 'c/Layout.tsx';
import Error from 'i/Error.tsx';

export default function Error500() {
  return (
    <Layout>
      <Error code="500" message="Internal server error" />
    </Layout>
  );
}
