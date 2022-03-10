import type { GetStaticPropsContext } from 'next';
import path from 'path';
import fs from 'fs';

export async function getStaticBlogProps(ctx: GetStaticPropsContext) {
  const id = ctx.params!.id as string;
  const file = !/\.md/gi.test(id) ? id + '.md' : id;
  const content = fs.readFileSync(path.join(process.cwd(), '/public/_articles/' + file), 'utf-8');

  return { props: { content } };
}

export async function getStaticBlogPaths() {
  return { paths: ['/blog/test'], fallback: true };
}
