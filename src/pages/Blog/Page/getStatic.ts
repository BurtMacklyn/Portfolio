import type { GetStaticPropsContext } from 'next';
import path from 'path';
import fs from 'fs';
import { getAllBlogPaths } from '~/lib';

export async function getStaticBlogPageProps(ctx: GetStaticPropsContext) {
  const id = ctx.params!.id as string;

  const content = fs.readFileSync(path.join(process.cwd(), `/public/_articles/${id}.md`), 'utf-8');

  return { props: { content } };
}

export async function getStaticBlogPaths() {
  return { paths: getAllBlogPaths(), fallback: true };
}
