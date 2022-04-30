import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import path from 'path';
import { Back, Footer, Markdown, Nav, Portfolio } from '~/components';
import { projects } from './data/projects';
import fs from 'fs';
import style from '~/style/components/Projects.module.scss';

type ProjectData = typeof projects[number];

export default function Project({ project, content }: { project: ProjectData; content: string }) {
  content += `\n#\n\n---\n\n###### Cooper Runyan`;

  return (
    <Portfolio>
      <Head>
        <title>{project?.name}</title>
      </Head>
      <Nav />
      <div className={style.projectpage}>
        <div className={style.back}>
          <Back color="black" />
        </div>
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </Portfolio>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext): Promise<GetStaticPropsResult<{ project: ProjectData; content: string }>> {
  const index = ctx.params?.project as any;
  const project = projects.filter(project => project.link === `/projects/${index}`)[0];

  const content = fs.readFileSync(path.join(process.cwd(), `/public/projects/pages/${project.content}.md`), 'utf-8');

  return { props: { project, content } };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths: string[] = [];

  for (const project of projects) {
    paths.push(project.link);
  }

  return { paths, fallback: true };
}
