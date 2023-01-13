import { IS_BROWSER } from 'fresh/runtime.ts';
import { Configuration, setup } from 'tailwind';
import { config } from '../config/index.ts';
import { styled } from './styled.ts';

const styleconfig: Configuration = {
  darkMode: 'media',
  mode: 'silent',
  theme: {
    colors: {
      ...config.colors,
      ...Object.fromEntries(
        Object.entries(config.colors.greyscale).map(([k, v]) => [
          `grey${k}`,
          v,
        ]),
      ),
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    screens: {
      m2xl: { min: `${1800 / 16}em` },
      '2xl': { max: `${1800 / 16}em` },
      mxl: { min: `${1400 / 16}em` },
      xl: { max: `${1400 / 16}em` },
      mlg: { min: `${1200 / 16}em` },
      lg: { max: `${1200 / 16}em` },
      mmd: { min: `${900 / 16}em` },
      md: { max: `${900 / 16}em` },
      msm: { min: `${600 / 16}em` },
      sm: { max: `${600 / 16}em` },
      mxs: { min: `${400 / 16}em` },
      xs: { max: `${400 / 16}em` },
      xxs: { max: `${360 / 16}em` },

      'height-sm': { raw: '(max-height: calc(700em / 16))' },
    },
    extend: {
      spacing: {
        x18: `${18 / 16}rem`, // 4.5
        x90: `${90 / 16}rem`, // 22
      },
      animation: {
        sll: 'slide-left .15s ease-in-out both',
        slr: 'slide-right .15s ease-in-out both',
        fin: 'fade .15s ease-in-out both',
        fout: 'fade .15s ease-in-out both reverse',
      },
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0%)' },
        },
        'slide-right': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(100%)' },
        },
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
};

export const overrides = styled`
  html {
    color-scheme: dark;
    background-color: ${config.colors.greyscale[0]};
  }

  ::selection {
    background-color: ${config.colors.greyscale[25]};
  }
`;

export * from 'tailwind';
export * as sheets from 'tailwind/sheets';
export { styleconfig as config };

if (IS_BROWSER) setup(styleconfig);
