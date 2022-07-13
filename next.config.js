const pageExtensions = ['route.ts', 'route.tsx'];

if (process.env.NODE_ENV === 'development') pageExtensions.push('dev.ts', 'dev.tsx');

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  pageExtensions,

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
    ];
  },
};
