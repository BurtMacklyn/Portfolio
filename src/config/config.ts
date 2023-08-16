import pkg from '../../package.json';

export const config = {
  // metadata
  title: pkg.author.name,
  version: pkg.version,
  description: pkg.description,
  email: pkg.author.email,
  repo: pkg.repository.url,

  siteImg: '/profile-wide.png',
  emailLink: `mailto:${pkg.author.email}`,

  // Pages
  pages: {
    overview: '/',
    contact: `mailto:${pkg.author.email}`,
    snake: '/snake',
  },

  social: {
    github: {
      value: pkg.author.github,
      link: `https://github.com/${pkg.author.github}`,
    },
  },
} as const;
