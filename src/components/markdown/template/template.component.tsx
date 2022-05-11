import type { GetStaticPathsContext, GetStaticPropsContext } from 'next';
import fs from 'fs';
import matter from 'gray-matter';

import Head from 'next/head';

import { Back } from '~/components/back/back.component';
import { Footer } from '~/components/footer/footer.component';
import { Nav } from '~/components/nav/nav.component';
import { Portfolio } from '~/components/portfolio/portfolio.component';

import style from './template.module.scss';
import { Markdown } from '~/components/markdown/markdown.component';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { marked } from 'marked';
import { getHighlighter } from 'shiki';

const formatDate = (date: Date) => new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date));

export const Page: React.FC<{ content: string; meta: Record<string, any> }> = ({ content, meta }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`allow-profanity-${router.query.slug}`) === 'true') return setOpen(false);
    setOpen(!!meta.warn);
  }, [meta]);

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
                <span dangerouslySetInnerHTML={{ __html: content }} />
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

    const highlighter = await getHighlighter({
      theme: 'one-dark-pro',
      langs: ['ts', 'tsx', 'js', 'jsx', 'html', 'css', 'scss', 'yaml', 'prisma', 'bash'],
    });

    const html = marked(content).replaceAll(/<pre><code class="language-(\w+)">.+?<\/code><\/pre>/gs, (block, lang) => {
      return highlighter.codeToHtml(
        replace(block.replace(/<pre><code class="language-\w+">/gs, '').replace(/<\/code><\/pre>/gs, '')),
        (lang || '').toLowerCase(),
      );
    });

    return {
      props: {
        raw: content,
        content: html,
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

function replace(str: string) {
  return str
    .replaceAll(`&quot;`, `"`)
    .replaceAll(`&apos;`, `'`)
    .replaceAll(`&#39;`, `'`)
    .replaceAll(`&amp;`, `&`)
    .replaceAll(`&lt;`, `<`)
    .replaceAll(`&gt;`, `>`)
    .replaceAll(`&nbsp;`, ` `)
    .replaceAll(`&iexcl;`, `¡`)
    .replaceAll(`&cent;`, `¢`)
    .replaceAll(`&pound;`, `£`)
    .replaceAll(`&curren;`, `¤`)
    .replaceAll(`&yen;`, `¥`)
    .replaceAll(`&brvbar;`, `¦`)
    .replaceAll(`&sect;`, `§`)
    .replaceAll(`&uml;`, `¨`)
    .replaceAll(`&copy;`, `©`)
    .replaceAll(`&ordf;`, `ª`)
    .replaceAll(`&laquo;`, `«`)
    .replaceAll(`&not;`, `¬`)
    .replaceAll(`&shy;`, `­`)
    .replaceAll(`&reg;`, `®`)
    .replaceAll(`&macr;`, `¯`)
    .replaceAll(`&deg;`, `°`)
    .replaceAll(`&plusmn;`, `±`)
    .replaceAll(`&sup2;`, `²`)
    .replaceAll(`&sup3;`, `³`)
    .replaceAll(`&acute;`, `´`)
    .replaceAll(`&micro;`, `µ`)
    .replaceAll(`&para;`, `¶`)
    .replaceAll(`&middot;`, `·`)
    .replaceAll(`&cedil;`, `¸`)
    .replaceAll(`&sup1;`, `¹`)
    .replaceAll(`&ordm;`, `º`)
    .replaceAll(`&raquo;`, `»`)
    .replaceAll(`&frac14;`, `¼`)
    .replaceAll(`&frac12;`, `½`)
    .replaceAll(`&frac34;`, `¾`)
    .replaceAll(`&iquest;`, `¿`)
    .replaceAll(`&times;`, `×`)
    .replaceAll(`&divide;`, `÷`);
}
