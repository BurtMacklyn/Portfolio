import path from 'path';
import fs from 'fs';

export function getAllBlogPaths() {
  return fs
    .readdirSync(path.join(process.cwd(), '/public/_articles/'), 'utf-8')
    .map((path) => path.replace(/\.md/, ''))
    .map((page) => `/blog/${page}`);
}
