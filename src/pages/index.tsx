import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';
import { Nav } from '@/components/Nav/Nav';

import { About } from '@/sections/index/About';
import { Hero } from '@/sections/index/Hero';
import { Joke } from '@/sections/index/Joke';
import { Quotes } from '@/sections/index/Quotes';
import { Technologies } from '@/sections/index/Technologies';

export default function Index() {
  return (
    <>
      <Nav />
      <Main>
        <Hero />
        <Joke />
        <About />
        <Technologies />
        <Quotes />
      </Main>
      <Footer />
    </>
  );
}
