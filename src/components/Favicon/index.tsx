import Head from 'next/head';

export function Favicon({ dark, light }: { dark?: boolean; light?: boolean }) {
  return (
    <Head>
      {light && (
        <>
          <link rel="shortcut icon" type="image/x-icon" sizes="any" href="/favicon.ico" />
          <link rel="shortcut icon" type="image/svg+xml" sizes="any" href="/favicon.svg" />
        </>
      )}
      {!light && (
        <>
          <link rel="shortcut icon" type="image/x-icon" sizes="any" href="/favicon-light.ico" />
          <link rel="shortcut icon" type="image/svg+xml" sizes="any" href="/favicon-light.svg" />
        </>
      )}
    </Head>
  );
}
