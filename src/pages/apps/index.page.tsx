import style from './style/apps.module.scss';
import Image from 'next/image';

import { Footer } from '~/components/footer/footer.component';
import { Link } from '~/components/link/link.component';
import { Nav } from '~/components/nav/nav.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';

const Apps = () => (
  <Portfolio>
    <Nav />
    <div className="center">
      <div className={style.Main}>
        <div className={style.section}>
          <h2>Apps</h2>
          <div className={style.content}>
            <Card>{{ name: 'Music Player', link: '/apps/retro-music', image: '/imgs/apps/retro-music.webp' }}</Card>
            <Card>{{ name: 'Trig Helper', link: '/apps/trig-helper', image: '/imgs/apps/trig-helper.webp' }}</Card>
            <Card>{{ name: 'Snake', link: '/apps/snake', image: '/imgs/apps/snake.webp' }}</Card>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Portfolio>
);

export default Apps;

/* eslint-disable-next-line no-undef */
const Card: React.FC<{ children: { name: string; link: string; image: string } }> = ({ children: app }) => (
  <Link href={app.link} className={style.card}>
    <div>
      <Image layout="responsive" alt={`Preview image for ${app.name}`} width={4000} height={2400} src={app.image} />
    </div>
    <p>{app.name}</p>
  </Link>
);
