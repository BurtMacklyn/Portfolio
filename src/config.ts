import pkg from '../package.json';
import { em, rem } from './utils/spacing';

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

export const style = {
  maxWidth: rem(1800),
  margin: {
    default: rem(128),

    // media queries
    xl: rem(96),
    lg: rem(64),
    md: rem(48),
    sm: rem(32),
    xs: rem(16),
  },
  colors: {
    primary: '#009dff',
    secondary: '#b030ff',
    error: '#ff442c',

    layer: {
      0: '#000000',
      4: '#0a0a0a',
      8: '#141414',
      12: '#1f1f1f',
      24: '#3d3d3d',
      36: '#5c5c5c',
      50: '#808080',
      64: '#a3a3a3',
      80: '#cccccc',
      100: '#ffffff',
    },
  },
  breakpoints: {
    xxl: em(1800),
    xl: em(1400),
    lg: em(1200),
    md: em(896),
    sm: em(640),
    xs: em(384),
  },
} as const;

// prettier-ignore
export function css() {
  const setvar = (k: string, v: any) => document?.documentElement?.style?.setProperty(`--${k}`, v)

  for (const [k, v] of Object.entries(style.colors.layer)) setvar(`layer-${k}`, v);
  for (const [k, v] of Object.entries(style.breakpoints)) setvar(`media-${k}`, v);
  for (const [k, v] of Object.entries(style.margin)) setvar(`margin-${k}`, v);
  for (const [k, v] of Object.entries(style.colors)) k !== 'layer' && setvar(`color-${k}`, v);

  setvar('maxWidth', style.maxWidth)
}
