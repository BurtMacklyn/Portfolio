import style from './Blog.module.scss';
import { Link, Portfolio, Nav, Center } from '~/components';

type Data = {
  title: string;
  preview: string;
};

export function Blog({ pages, data }: { pages: string[]; data: Data }) {
  console.log(data);

  return (
    <Portfolio>
      <Nav />
      <Center>
        <div className={style.section}>
          {pages.map((page) => (
            <Link key={page} href={page}>
              {page}
            </Link>
          ))}
        </div>
      </Center>
    </Portfolio>
  );
}
