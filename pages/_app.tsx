import '../style/css/style.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';
import SeoLinks from '../src/components/SeoLinks';

export const config = { unstable_runtimeJS: false };

function App({ Component, pageProps, router }: AppProps): JSX.Element {
  const url = `https://wallis.dev${router.route}`;
  return (
    <>
      <Head>
        <title>Cooper Runyan | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="A marketing and about site for web designer and developer, Cooper Runyan" />
        <SeoLinks />
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          description: 'The personal website for Cooper Runyan, developer.',
          url,
          site_name: 'Cooper Runyan | Portfolio',
          images: []
        }}
        canonical={url}
      />

      <AnimatePresence exitBeforeEnter={true} initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </>
  );
}

export default App;
