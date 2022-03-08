import { Portfolio, Nav } from '~/components';
import { Header } from './Header';
import { Quote } from './Quote';
import { TypeScript } from './TypeScript';

export function Home() {
  return (
    <Portfolio>
      <Nav />
      <Header />
      <Quote />
      <TypeScript />
    </Portfolio>
  );
}
