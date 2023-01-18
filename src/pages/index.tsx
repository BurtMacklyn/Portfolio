import { IndexHero } from '@/components/sections/IndexHero';
import { Banner } from '@components/Banner';
import { Main } from '@components/Main';
import { Nav } from '@components/Nav/Nav';

export default function Home() {
  return (
    <>
      <Banner />
      <Nav />
      <Main>
        <IndexHero />
      </Main>
    </>
  );
}
