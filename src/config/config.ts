import pkg from '../../package.json';

const email = 'c@cooperrunyan.com';

export const config = {
  // metadata
  title: 'Cooper Runyan',
  version: pkg.version,
  description: pkg.description,
  email,
  lastUpdated: 'January 12, 2023 9:41 PM MST',

  siteImg: '/profile.png',

  // Pages
  pages: {
    overview: '/',
    contact: `mailto:${email}`,
    snake: '/snake',
  },

  // meta tags
  meta: [],
} as const;
