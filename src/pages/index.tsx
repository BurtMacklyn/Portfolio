import { IndexQuotes } from '@/components/sections/IndexQuotes';
import { Banner } from '@components/Banner';
import { Main } from '@components/Main';
import { Nav } from '@components/Nav/Nav';
import { IndexAbout } from '@components/sections/IndexAbout';
import { IndexHero } from '@components/sections/IndexHero';
import { IndexJoke } from '@components/sections/IndexJoke';
import { IndexTechnologies } from '@components/sections/IndexTechnologies';

export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
      <Main>
        <IndexHero />
        <IndexJoke />
        <IndexAbout />
        <IndexTechnologies />
        <IndexQuotes />
      </Main>
    </>
  );
}
