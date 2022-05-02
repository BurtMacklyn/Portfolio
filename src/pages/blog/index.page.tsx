import Head from 'next/head';
import { Footer } from '~/components/footer/footer.component';
import { Link } from '~/components/link/link.component';
import { Nav } from '~/components/nav/nav.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';

import style from './template/template.module.scss';
import { pages } from './data/pages';

const Blog = () => (
  <Portfolio>
    <Head>
      <title>Blog</title>
    </Head>
    <Nav />
    <div className="center">
      <div className={style.Main}>
        <div className={style.section}>
          <h2>Blog</h2>
          <div className={style.content}>
            {pages.map(page => (
              <Link key={page.path} href={`/blog/${page.path}`} className={style.Card}>
                <page.Preview />
                <p>{page.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Portfolio>
);

export default Blog;
