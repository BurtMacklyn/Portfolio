import Head from 'next/head';

export const Favicon = () => (
  <Head>
    {window.matchMedia('(prefers-color-scheme: dark)').matches && <link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon-light/favicon.ico" />}
    {!window.matchMedia('(prefers-color-scheme: dark)').matches && <link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon-dark/favicon.ico" />}
  </Head>
);
