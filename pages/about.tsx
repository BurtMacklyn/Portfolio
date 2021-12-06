import About from '../src/about/Main';
import Motion from '../src/components/Motion';
import Head from 'next/head';

export const config = { unstable_runtimeJS: false };

export default function Main() {
  return (
    <>
      <Head>
        <title>Cooper Runyan | About</title>
      </Head>
      <Motion>
        <About />
      </Motion>
    </>
  );
}
