import { em, rem } from '../css';

export const style = {
  maxWidth: rem(1800),
  borderRadius: rem(4),
  transition: {
    property:
      'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
    time: 100,
    function: 'ease-in-out',
  },
  margin: {
    default: rem(128),

    // media queries
    xl: rem(96),
    lg: rem(64),
    md: rem(48),
    sm: rem(32),
    xs: rem(16),
  },
  color: {
    primary: '#009dff',
    secondary: '#b030ff',
    error: '#ff442c',

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
  breakpoints: {
    xxl: em(1800),
    xl: em(1400),
    lg: em(1200),
    md: em(896),
    sm: em(640),
    xs: em(384),
  },
} as const;

export type Color = keyof typeof style.color;

export enum Z {
  _,
  Background,
  BehindContent,
  Content,
  Elevated,
  Elevated2,
  Elevated3,
  Elevated4,
  Overlay,
  Nav,
  Banner,
}

export function color<T extends Color>(opt: T) {
  return style.color[opt];
}

// prettier-ignore
export function setCSSVariables() {
  const setvar = (k: string, v: any) => document?.documentElement?.style?.setProperty(`--${k}`, v)

  for (const [k, v] of Object.entries(style.breakpoints)) setvar(`media-${k}`, v);
  for (const [k, v] of Object.entries(style.margin)) setvar(`margin-${k}`, v);
  for (const [k, v] of Object.entries(style.color)) setvar(`color-${k}`, v)


  setvar('maxWidth', style.maxWidth)
}
