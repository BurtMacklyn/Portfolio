import { opacity } from '../lib/opacity.ts';

const email = 'c@cooperrunyan.com';

const black = '#000000';
const white = '#ffffff';

export const config = {
  // metadata
  version: '5.11.1',
  email: 'c@cooperrunyan.com',
  lastUpdated: 'January 12, 2023 9:41 PM MST',

  // Pages
  pages: {
    overview: '/',
    contact: `mailto:${email}`,
    snake: '/snake',
  },

  // Styling
  maxWidth: `${1800 / 16}rem`,
  margin: 'xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-4 mxl:px-32',
  colors: {
    primary: '#009dff',
    secondary: '#b030ff',
    error: '#ff442c',
    white,
    black,

    greyscale: {
      0: black,
      4: opacity(white, 0.04),
      8: opacity(white, 0.08),
      12: opacity(white, 0.12),
      25: opacity(white, 0.25),
      40: opacity(white, 0.4),
      60: opacity(white, 0.6),
      80: opacity(white, 0.8),
      100: white,
    },
  },

  // meta tags
  meta: [],
} as const;
