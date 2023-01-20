import { variable } from '@/css';

export const font = {
  sans: {
    family: variable('sans'),
    variable: '--sans',
    weight: 400,
    bold: 600,
  },
  mono: {
    family: variable('mono'),
    variable: '--mono',
    weight: 400,
  },
} as const;
