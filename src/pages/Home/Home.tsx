import { Portfolio, Nav } from '~/components';
import { Header } from './Header';
import { Quote } from './Quote';

export function Home() {
  return (
    <Portfolio>
      <Nav />
      <Header />
      <Quote />
    </Portfolio>
  );
}
