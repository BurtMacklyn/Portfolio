import { Banner } from '@components/Banner';
import { Main } from '@components/Main';
import { Nav } from '@components/Nav/Nav';
import { IndexHero } from '@components/sections/IndexHero';
import { IndexJoke } from '@components/sections/IndexJoke';

export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
      <Main>
        <IndexHero />
        <IndexJoke />
      </Main>
    </>
  );
}
