/** @jsx h */
import { h } from 'preact';

import Layout from 'c/Layout.tsx';
import Error from 'i/Error.tsx';

export default function Error404() {
  return (
    <Layout>
      <Error code="404" message="Page not found" />
    </Layout>
  );
}
