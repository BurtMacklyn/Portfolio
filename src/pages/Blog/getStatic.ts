import type { GetStaticPropsContext } from 'next';
import { getAllBlogPaths } from '~/lib';
import fs from 'fs';
import path from 'path';

export async function getStaticBlogProps(ctx: GetStaticPropsContext) {
  const pages = getAllBlogPaths();
  const data: { [key: string]: {} } = {};

  for (const page of pages) {
    data[page] = JSON.parse(fs.readFileSync(path.join(process.cwd(), `/public/_articledata/${page.replace('/blog', '')}.json`), 'utf-8') || '{}');
  }

  return { props: { pages, data } };
}
