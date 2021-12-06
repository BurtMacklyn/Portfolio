import Projects from '../src/projects/Main';
import Motion from '../src/components/Motion';
import Head from 'next/head';

export const config = { unstable_runtimeJS: false };

export default function Main() {
  return (
    <>
      <Head>
        <title>Cooper Runyan | Projects</title>
      </Head>
      <Motion>
        <Projects />
      </Motion>
    </>
  );
}
