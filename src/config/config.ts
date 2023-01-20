import lastUpdate from '@static/lastupdate.json' assert { type: 'json' };
import pkg from '../../package.json';

const parsedBuildDate = new Date(lastUpdate.value);

export const config = {
  // metadata
  title: pkg.author.name,
  version: pkg.version,
  description: pkg.description,
  email: pkg.author.email,
  lastUpdated: Intl.DateTimeFormat('en', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(parsedBuildDate),
  repo: pkg.repository.url,

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
} as const;
