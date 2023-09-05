import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';
import { Nav } from '@/components/Nav/Nav';

import { About } from '@/sections/index/About';
import { Hero } from '@/sections/index/Hero';
import { Joke } from '@/sections/index/Joke';
import { Quotes } from '@/sections/index/Quotes';
import { Technologies } from '@/sections/index/Technologies';
import { getJoke } from './api/joke';

export default function Index(
  props: Awaited<ReturnType<typeof getStaticProps>>['props'],
) {
  return (
    <>
      <Nav />
      <Main>
        <Hero />
        <Joke joke={props.joke} />
        <About experience={props.experience} />
        <Quotes />
        <Technologies />
      </Main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      joke: getJoke('daily'),
      experience: new Date().getFullYear() - 2021,
    },
    revalidate: 6 * 60 * 60,
  };
}
