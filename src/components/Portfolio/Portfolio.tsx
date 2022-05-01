import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useUrl } from '~/hooks';
import { Favicon } from '../Favicon';
import style from './Portfolio.module.scss';

/* eslint-disable-next-line no-undef */
export const Portfolio: React.FC = ({ children }) => {
  const url = useUrl();
  let names = '';
  for (let i = 0; i < 1000; i++) {
    names += 'Cooper Runyan ';
  }

  return (
    <>
      {url && (
        <>
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
            twitter={{
              handle: '@CooperRunyan1',
            }}
          />

          <Favicon />

          <Head>
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

          {/* This should in theory help with SEO */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: 0,
              pointerEvents: 'none',
            }}>
            {names}
          </div>

          <div className={style.Portfolio}>{children}</div>
        </>
      )}
    </>
  );
};
