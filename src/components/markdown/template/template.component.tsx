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
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const formatDate = (date: Date) => new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date));

export const Page: React.FC<{ content: string; meta: Record<string, any> }> = ({ content, meta }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`allow-profanity-${router.query.slug}`) === 'true') return setOpen(false);
    setOpen(!!meta.warn);
  }, [meta]);

  useEffect(() => {
    const el = document.querySelector('.rendered-markdown');

    console.log(hydrateContentWithCodeHighlights(el!.innerHTML));
    el!.innerHTML = hydrateContentWithCodeHighlights(el!.innerHTML);
  }, []);

  return (
    <>
      <Portfolio>
        <>
          <Head>
            <title>{meta?.title || 'Blog'}</title>
          </Head>
          <Nav />
          <div className={style.Page}>
            {open && (
              <>
                <dialog open={open} className={style.dialog}>
                  <p>{meta.warn}</p>
                  <div>
                    <button
                      onClick={e => {
                        e.preventDefault();
                        router.back();
                      }}>
                      Go back
                    </button>
                    <button
                      className={style.ok}
                      onClick={e => {
                        e.preventDefault();
                        localStorage.setItem(`allow-profanity-${router.query.slug}`, 'true');
                        setOpen(false);
                      }}>
                      I'm fine with that
                    </button>
                  </div>
                </dialog>
                <div className={style.dialogBackdrop} />
              </>
            )}
            <div className={style.blog}>
              <div className={style.back}>
                <Back color="black" />
              </div>
              <Markdown>
                <span className="rendered-markdown">
                  <MDXRemote compiledSource={content} />
                </span>
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
    const dir = fs.existsSync(`${fullPath}/${ctx.params?.slug}.mdx`) ? `${fullPath}/${ctx.params?.slug}.mdx` : `${fullPath}/${ctx.params?.slug}.md`;

    const file = fs.readFileSync(dir, 'utf8');
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
        .map(slug => `${accessPath}/${slug.replace('.mdx', '').replace('.md', '')}`),
      fallback: 'blocking',
    };
  };
}

interface Props {
  accessPath: string; // '/blog'
  fullPath: string; // './src/pages/blog/pages'
}

function hydrateContentWithCodeHighlights(content: string): string {
  const prismaTester = /(?<=<pre><code class="language-prisma">).*?(?=<\/code><\/pre>)/gms;

  return content.replaceAll(prismaTester, block => {
    return block
      .replaceAll(/".*"|'.*'|`.*`/g, word => `<span class="green">${word}</span>`)
      .replaceAll(/(?<=\n\s*)\w+/g, word => `<span class="red">${word}</span>`)
      .replaceAll(/datasource|model|generator/g, word => `<span class="magenta">${word}</span>`)
      .replaceAll(/\/\/.*(?=\n)/g, word => `<span class="grey">${word}</span>`)
      .replaceAll(/\w+(?=\s*{)/g, word => `<span class="yellow">${word}</span>`)
      .replaceAll(/(?<=class="red".+<\/span>\s+)\w+/g, word => `<span class="yellow">${word}</span>`)
      .replaceAll(/(?<=@\w+\()\w+(?=\(\))/g, word => `<span class="cyan">${word}</span>`)
      .replaceAll(/@\w+/g, word => `<span class="blue">${word}</span>`)
      .replaceAll(/\w+(?=:)/g, word => `<span class="red">${word}</span>`);
  });
}
