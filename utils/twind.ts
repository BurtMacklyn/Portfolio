import { IS_BROWSER } from '$fresh/runtime.ts';
import { Configuration, setup } from 'twind';

export * from 'twind';

export const config: Configuration = {
  darkMode: 'media',
  mode: 'silent',
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      primary: '#00C2FF',
      grey1: '#404040',
      grey2: '#0A0A0A',
    },
    fontFamily: {
      sans: ['BR Cobane', 'Inter', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    screens: {
      '2xl': { max: 'calc(1800em / 16)' },
      xl: { max: 'calc(1400em / 16)' },
      lg: { max: 'calc(1200em / 16)' },
      md: { max: 'calc(900em / 16)' },
      sm: { max: 'calc(600em / 16)' },
      xs: { max: 'calc(400em / 16)' },
    },
    extend: {
      spacing: {
        '800': '50rem',
      },
    },
  },
};

if (IS_BROWSER) setup(config);
