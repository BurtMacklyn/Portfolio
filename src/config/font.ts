import { variable } from '@/css';

export const font = {
  sans: {
    family: variable('sans'),
    variable: '--sans',
    weight: 400,
    bold: 600,
    fallback: ['Roboto', 'Helvetica Neue', 'system-ui'],
  },
  mono: {
    family: variable('mono'),
    variable: '--mono',
    weight: 500,
    fallback: ['Consolas', 'Menlo', 'monospace'],
  },
} as const;
