import { Footer } from '~/components/Footer/Footer';
import { Nav } from '~/components/Nav/Nav';
import { Experience } from '~/components/HomeContent/Experience/Experience';
import { Typescript } from '~/components/HomeContent/Experience/icons';
import { FreeTime } from '~/components/HomeContent/FreeTime/FreeTime';
import { Header } from '~/components/HomeContent/Header/Header';
import { Make } from '~/components/HomeContent/Make/Make';
import { Quote } from '~/components/HomeContent/Quote/Quote';
import { Socials } from '~/components/HomeContent/Socials/Socials';
import { Portfolio } from '~/components/Portfolio/Portfolio';

const HomePage = () => {
  return (
    <Portfolio>
      <Nav />
      <Header />
      <Quote />
      <Typescript />
      <FreeTime />
      <Experience />
      <Make />
      <Socials />
      <Footer />
    </Portfolio>
  );
};

export default HomePage;
