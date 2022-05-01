import 'src/style/base.scss';
import Head from 'next/head';
import Script from 'next/script';
import { MDXProvider } from '@mdx-js/react';

const App = ({ Component, pageProps }: any) => (
  <>
    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
    <Script strategy="lazyOnload" id="google-analytics">
      {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');`}
    </Script>

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1" />
    </Head>

    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  </>
);

export default App;
