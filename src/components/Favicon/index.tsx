import Head from 'next/head';
import useSystemTheme from 'react-use-system-theme';

export function Favicon() {
  const systemTheme = useSystemTheme();
  return (
    <Head>
      {systemTheme === 'dark' && <link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon-light/favicon.ico" />}
      {systemTheme !== 'dark' && <link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon-dark/favicon.ico" />}
    </Head>
  );
}
