import Head from 'next/head';

export function Favicon() {
  return (
    <Head>
      <link rel="shortcut icon" type="image/x-icon" sizes="any" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
    </Head>
  );
}
