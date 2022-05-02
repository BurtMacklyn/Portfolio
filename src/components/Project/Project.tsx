import Head from 'next/head';
import { projects } from '~/pages/projects';
import style from '~/style/components/Projects.module.scss';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Back } from '../Back/Back';
import { Footer } from '../Footer/Footer';
import { Markdown } from '../Markdown/Markdown';
import { Nav } from '../Nav/Nav';
import { Portfolio } from '../Portfolio/Portfolio';

/* eslint-disable-next-line no-undef */
export const Project: React.FC<{ children: any }> = ({ children }) => {
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
