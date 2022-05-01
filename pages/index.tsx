import { Footer, HomeContent as Home, Nav, Portfolio } from '~/components';

const HomePage = () => {
  return (
    <Portfolio>
      <Nav />
      <Home.Header />
      <Home.Quote />
      <Home.Typescript />
      <Home.FreeTime />
      <Home.Experience />
      <Home.Make />
      <Home.Socials />
      <Footer />
    </Portfolio>
  );
};

export default HomePage;
