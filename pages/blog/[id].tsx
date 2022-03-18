import type { GetStaticPropsContext } from 'next';
import path from 'path';
import fs from 'fs';
import { formatDate, getAllBlogPaths } from '~/lib';
import Head from 'next/head';
import { Portfolio, Markdown, Back, Nav, Footer } from '~/components';
import style from '~/style/components/Blog.module.scss';

export default function Page({ content, metadata }: { content: string; metadata: any }) {
  content += `#\n\n---\n\n###### Cooper Runyan: ${metadata ? formatDate(metadata.timestamp) : null}`;
  return (
    <Portfolio>
      <Head>
        <title>Blog</title>
      </Head>
      <Nav />
      <div className={style.Page}>
        <div className={style.blog}>
          <div className={style.back}>
            <Back color="black" />
          </div>
          <Markdown>{content}</Markdown>
        </div>
      </div>
      <Footer />
    </Portfolio>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const content = fs.readFileSync(path.join(process.cwd(), `/public/_articles/content/${ctx.params!.id}.md`), 'utf-8');
  const metadata = JSON.parse(fs.readFileSync(path.join(process.cwd(), `/public/_articles/metadata/${ctx.params!.id}.json`), 'utf-8'));
  return { props: { content, metadata } };
}

export async function getStaticPaths() {
  return { paths: getAllBlogPaths(), fallback: true };
}
