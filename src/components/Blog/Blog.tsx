import Head from 'next/head';
import style from './Blog.module.scss';
import { formatDate } from '~/lib/formatDate';
import { useEffect, useState } from 'react';
import { pages } from '../../../pages/blog/index';
import { useRouter } from 'next/router';
import type { generatePageData } from '~/lib/generatePageData';
import { Back } from '../Back/Back';
import { Footer } from '../Footer/Footer';
import { Markdown } from '../Markdown/Markdown';
import { Nav } from '../Nav/Nav';
import { Portfolio } from '../Portfolio/Portfolio';

/* eslint-disable-next-line no-undef */
export const Blog: React.FC<{ children: any }> = ({ children }) => {
  const router = useRouter();

  const [meta, setMeta] = useState<ReturnType<typeof generatePageData>[number]>();

  useEffect(() => {
    for (const page of pages) {
      if (new RegExp(page.path).test(router.asPath)) setMeta(page);
    }
  }, [router.asPath]);

  return (
    <Portfolio>
      <Head>
        <title>{meta?.title || 'Blog'}</title>
      </Head>
      <Nav />
      <div className={style.Page}>
        <div className={style.blog}>
          <div className={style.back}>
            <Back color="black" />
          </div>
          <Markdown>
            {children}
            <br />
            <hr />
            <h6>Cooper Runyan: {meta ? formatDate(meta?.timestamp) : ''}</h6>
          </Markdown>
        </div>
      </div>
      <Footer />
    </Portfolio>
  );
};
