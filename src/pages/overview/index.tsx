import { Footer } from '~/components/footer/footer.component';
import { Nav } from '~/components/nav/nav.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';
import { Experience } from './sections/experience/experience.component';
import { Typescript } from './sections/typescript/typescript.component';
import { Freetime } from './sections/freetime/freetime.component';
import { Header } from './sections/header/header.component';
import { Make } from './sections/make/make.component';
import { Quote } from './sections/quote/quote.component';
import { Socials } from './sections/socials/socials.component';

const HomePage = () => (
  <Portfolio>
    <Nav />
    <Header />
    <Quote />
    <Typescript />
    <Freetime />
    <Experience />
    <Make />
    <Socials />
    <Footer />
  </Portfolio>
);

export default HomePage;
