import style from '~/components/Blog/Blog.module.scss';
import { Link, Portfolio, Nav, Footer } from '~/components';
import Head from 'next/head';
import { generatePageData } from '~/lib/generatePageData';

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
  { id: 'docker-development', title: 'The Key To Development In Docker', timestamp: 'April 27' },
  { id: 'what-is-deno', title: 'Deno. What is it?', timestamp: 'March 19' },
  { id: 'welcome', title: 'Welcome to my blog', timestamp: 'March 16' },
]);
