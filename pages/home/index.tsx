import { Portfolio, Nav, Footer } from '~/components';
import { Experience } from './Experience';
import { FreeTime } from './FreeTime';
import { Header } from './Header';
import { Make } from './Make';
import { Quote } from './Quote';
import { Socials } from './Socials';
import { Typescript } from './Typescript';

export default function Home() {
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
}
