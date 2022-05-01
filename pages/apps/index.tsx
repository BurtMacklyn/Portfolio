import { Portfolio, Link, Nav, Footer } from '~/components';
import style from '~/style/components/Apps.module.scss';
import Image from 'next/image';

const Apps = () => (
  <Portfolio>
    <Nav />
    <div className="center">
      <div className={style.page}>
        <h2>Apps</h2>
        <div className={style.center}>
          <div className={style.content}>
            <Card>{{ name: 'Music Player', link: '/apps/retro-music', image: '/imgs/projects/retro-music.webp' }}</Card>
            <Card>{{ name: 'Trig Helper', link: '/apps/trig-helper', image: '/imgs/projects/trig-helper.webp' }}</Card>
            <Card>{{ name: 'Snake', link: '/apps/snake', image: '/imgs/projects/snake.webp' }}</Card>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Portfolio>
);

export default Apps;

/* eslint-disable-next-line no-undef */
const Card: React.FC<{ children: { name: string; link: string; image: string } }> = ({ children: game }) => (
  <Link href={game.link} className={style.card}>
    <p>{game?.name}</p>
    <div>
      <Image src={game.image} layout="responsive" width={2400} height={2400} />
    </div>
  </Link>
);
