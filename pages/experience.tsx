import Experience from '../src/experience/Main';
import Motion from '../src/components/Motion';
import Head from 'next/head';

export const config = { unstable_runtimeJS: false };

export default function Main() {
  return (
    <>
      <Head>
        <title>Cooper Runyan | Experience</title>
      </Head>
      <Motion>
        <Experience />
      </Motion>
    </>
  );
}
