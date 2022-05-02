import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Back } from '~/components/back/back.component';
import { Footer } from '~/components/footer/footer.component';
import { Markdown } from '~/components/markdown/markdown.component';
import { Nav } from '~/components/nav/nav.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';

import style from './template.module.scss';
import { pages } from '../data/pages';

/* eslint-disable-next-line no-undef */
export const Template: React.FC<{ children: any }> = ({ children }) => {
  const router = useRouter();

  const [meta, setMeta] = useState<{ path: string; title: string; timestamp: Date; Preview: any }>();

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
            <p style={{ fontWeight: 'bold' }}>Cooper Runyan: {meta ? formatDate(meta?.timestamp) : ''}</p>
          </Markdown>
        </div>
      </div>
      <Footer />
    </Portfolio>
  );
};

const formatDate = (date: Date) => new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date));
