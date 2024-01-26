/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  redirects: async () => [
    {
      source: '/git',
      destination: 'https://www.github.com/cooperrunyan',
      permanent: false,
    },
  ],
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
