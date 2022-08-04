/** @jsx h */

import { Fragment, h } from 'preact';

export const Head = () => {
  return (
    <Fragment>
      <title>Cooper Runyan</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <meta name="theme" content="#000" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/style/base.css" />
    </Fragment>
  );
};
