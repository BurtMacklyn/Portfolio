import nextMDX from '@next/mdx';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

const withMDX = nextMDX({
  extension: /\.md?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
    rehypePlugins: [rehypeStringify],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  redirects: async () => [
    {
      source: '/git',
      destination: 'https://www.github.com/cooperrunyan',
      permanent: false,
    },
  ],
};

export default withMDX(nextConfig);
