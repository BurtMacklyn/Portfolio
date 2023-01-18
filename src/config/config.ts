import pkg from '../../package.json';

export const config = {
  // metadata
  title: pkg.author.name,
  version: pkg.version,
  description: pkg.description,
  email: pkg.author.email,
  lastUpdated: 'January 12, 2023 9:41 PM MST',

  siteImg: '/profile.png',
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

  // meta tags
  meta: [],
} as const;
