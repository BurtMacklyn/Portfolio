import Head from 'next/head';
import { Back } from '../Back';
import { Nav } from '../Nav';
import { Portfolio } from '../Portfolio';
import style from '~/style/components/Blog.module.scss';
import { Footer } from '../Footer';
import { Markdown } from '../Markdown';
import { formatDate } from '~/lib/formatDate';
import { useEffect, useState } from 'react';
import { pages } from '../../../pages/blog/index';
import { useRouter } from 'next/router';
import type { generatePageData } from '~/lib/generatePageData';

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
