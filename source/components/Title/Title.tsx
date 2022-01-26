import Head from 'next/head';

export function Title({ children }: { children: string }) {
  return (
    <Head>
      <title>Cooper Runyan | {children}</title>
    </Head>
  );
}
