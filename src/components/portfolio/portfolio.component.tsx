import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import style from './portfolio.module.scss';
import useSystemTheme from 'react-use-system-theme';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line no-undef */
export const Portfolio: React.FC = ({ children }) => {
  const [url, setUrl] = useState('');
  const router = useRouter();
  const matches = useSystemTheme() === 'dark';

  useEffect(() => setUrl(window?.location?.href), [router]);

  return (
    <>
      <Head>
        {matches && <link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon-light/favicon.ico" />}
        {!matches && <link rel="shortcut icon" type="image/x-icon" href="/favicons/favicon-dark/favicon.ico" />}

        <meta name="description" content="A marketing and about site for web designer and developer, Cooper Runyan" />
        <meta name="og:description" content="A marketing and about site for web designer and developer, Cooper Runyan" />
        <meta name="twitter:description" content="A marketing and about site for web designer and developer, Cooper Runyan" />
        <meta name="og:title" content="Cooper Runyan" />
        <meta name="locale" content="en_US" />
        <link rel="canonical" href={url} />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta charSet="utf-8" />

        <title>Cooper Runyan</title>
      </Head>

      <NextSeo
        title="Cooper Runyan"
        description="Professional marketing and portfolio website for Cooper Runyan"
        canonical={url}
        openGraph={{
          url,
          type: 'website',
          locale: 'en_US',
          title: 'Portfolio',
          description: "Main overview page of Cooper Runyan's portfolio",
          images: [
            {
              url: `${url}/imgs/site/banner.png`,
              alt: 'Cooper Runyan Banner',
              type: 'image/png',
            },
            {
              url: `${url}/imgs/site/profile.png`,
              alt: 'Cooper Runyan Profile Picture',
              type: 'image/png',
            },
          ],
          site_name: url,
        }}
        twitter={{ handle: '@CooperRunyan1' }}
      />

      <div className={style.Portfolio}>{children}</div>
    </>
  );
};
