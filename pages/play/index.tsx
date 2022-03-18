import { Center, Portfolio, Link, Nav, Footer } from '~/components';
import style from '~/style/components/Games.module.scss';
import Image from 'next/image';

export default function Play() {
  return (
    <Portfolio>
      <Nav />
      <Center>
        <div className={style.page}>
          <h2>Games</h2>
          <div className={style.content}>
            <Card>{{ name: 'Snake', link: '/play/snake', image: '/imgs/projects/snake.webp' }}</Card>
          </div>
        </div>
      </Center>
      <Footer />
    </Portfolio>
  );
}

function Card({ children: game }: { children: { name: string; link: string; image: string } }) {
  return (
    <Link href={game.link} className={style.card}>
      <p>{game.name}</p>
      <Image src={game.image} layout="responsive" width={2400} height={2400} />
    </Link>
  );
}
