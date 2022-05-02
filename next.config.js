import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';
import gfm from 'remark-gfm';
import bundleAnalyzer from '@next/bundle-analyzer';
import mdx from '@next/mdx';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [gfm],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

/** @type {import('next').NextConfig} */
export default withPlugins({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
    scope: '/',
  },

  webpack(config, { dev, isServer }) {
    if (!dev && !isServer)
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: '/git',
        destination: 'https://www.github.com/cooperrunyan',
        permanent: false,
      },
      {
        source: '/git/:slug',
        destination: 'https://www.github.com/cooperrunyan/:slug',
        permanent: false,
      },
      {
        source: '/repo',
        destination: 'https://www.github.com/cooperrunyan/cooperrunyan/',
        permanent: false,
      },
      {
        source: '/repo/:slug',
        destination: 'https://www.github.com/cooperrunyan/cooperrunyan/:slug',
        permanent: false,
      },
      {
        source: '/overview',
        destination: '/',
        permanent: false,
      },
      {
        source: '/home',
        destination: '/',
        permanent: false,
      },
      {
        source: '/snake',
        destination: '/apps/snake',
        permanent: false,
      },
    ];
  },
});

/** @param {import('next').NextConfig} config */
function withPlugins(config) {
  return withMDX(withBundleAnalyzer(withPWA(config)));
}
