import Head from 'next/head';
import { projects } from '../data/projects';
import style from '~/style/components/Projects.module.scss';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { Back } from '~/components/back/back.component';
import { Footer } from '~/components/footer/footer.component';
import { Markdown } from '~/components/markdown/markdown.component';
import { Nav } from '~/components/nav/nav.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';

/* eslint-disable-next-line no-undef */
export const Template: React.FC<{ children: any }> = ({ children }) => {
  const router = useRouter();

  const [meta, setMeta] = useState<typeof projects[number]>();

  useEffect(() => {
    for (const project of projects) {
      if (new RegExp(project.id).test(router.asPath)) setMeta(project);
    }
  }, [router.asPath]);

  return (
    <Portfolio>
      <Head>
        <title>{meta?.name || 'Cooper Runyan'}</title>
      </Head>
      <Nav />
      <div className={style.projectpage}>
        <div className={style.back}>
          <Back color="black" />
        </div>
        <Markdown>
          {children}

          <br />
          <hr />
          <p style={{ fontWeight: 'bold' }}>Cooper Runyan</p>
        </Markdown>
      </div>
      <Footer />
    </Portfolio>
  );
};
