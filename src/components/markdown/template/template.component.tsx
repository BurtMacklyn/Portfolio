import type { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import Head from 'next/head';

import { Back } from '~/components/back/back.component';
import { Footer } from '~/components/footer/footer.component';
import { Nav } from '~/components/nav/nav.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';

import style from './template.module.scss';
import { Markdown } from '~/components/markdown/markdown.component';
import gfm from 'remark-gfm';

const formatDate = (date: Date) => new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date));

export const Page: React.FC<{ content: string; meta: Record<string, any> }> = ({ content, meta }) => {
  return (
    <>
      <Portfolio>
        <>
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
                <MDXRemote compiledSource={content} />
                <br />
                <hr />
                <p style={{ fontWeight: 'bold' }}>Cooper Runyan{meta?.timestamp ? `: ${formatDate(meta?.timestamp || '')}` : ''}</p>
              </Markdown>
            </div>
          </div>
          <Footer />
        </>
      </Portfolio>
    </>
  );
};

export function getStaticProps({ fullPath }: Props) {
  return async (ctx: GetStaticPropsContext) => {
    const file = fs.readFileSync(`${fullPath}/${ctx.params?.slug}.mdx`, 'utf8');
    const { content, data } = matter(file);
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [gfm],
      },
    });

    return {
      props: {
        raw: content,
        content: mdxSource.compiledSource,
        meta: data,
      },
    };
  };
}

export function getStaticPaths({ accessPath, fullPath }: Props) {
  return async (ctx: GetStaticPathsContext) => {
    return {
      paths: fs
        .readdirSync(fullPath)
        .filter(p => /\.mdx$/.test(p))
        .map(slug => `${accessPath}/${slug.replace('.mdx', '')}`),
      fallback: 'blocking',
    };
  };
}

interface Props {
  accessPath: string; // '/blog'
  fullPath: string; // './src/pages/blog/pages'
}
