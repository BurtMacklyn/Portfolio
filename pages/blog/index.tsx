import style from '~/components/Blog/Blog.module.scss';
import Head from 'next/head';
import { generatePageData } from '~/lib/generatePageData';
import { Footer } from '~/components/Footer/Footer';
import { Link } from '~/components/Link/Link';
import { Nav } from '~/components/Nav/Nav';
import { Portfolio } from '~/components/Portfolio/Portfolio';

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

export const pages = generatePageData([
  { id: 'docker-development', title: 'The Key To Development In Docker', timestamp: 'April 27, 2022' },
  { id: 'what-is-deno', title: 'Deno. What is it?', timestamp: 'March 19, 2022' },
  { id: 'welcome', title: 'Welcome to my blog', timestamp: 'March 16, 2022' },
]);
