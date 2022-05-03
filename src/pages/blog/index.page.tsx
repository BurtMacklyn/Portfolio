import Head from 'next/head';
import { Footer } from '~/components/footer/footer.component';
import { Link } from '~/components/link/link.component';
import { Nav } from '~/components/nav/nav.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';
import Image from 'next/image';

import style from './blog.module.scss';
import { getMarkdownMeta } from '~/lib/getMarkdownMeta';

const Blog = ({ pages }) => (
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
            {pages?.map(page => (
              <Link key={page.slug} href={`/blog/${page.slug}`} className={style.Card}>
                <div>
                  <Image layout="responsive" alt={`Preview image for ${page.title}`} width={4000} height={2400} src={page.preview} />
                </div>
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

export const getStaticProps = getMarkdownMeta({
  img: '/imgs/blog',
  access: '/blog',
  full: './src/pages/blog/pages',
});

export default Blog;
