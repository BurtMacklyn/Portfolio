import { IS_BROWSER } from 'fresh/runtime.ts';
import { Configuration, setup } from 'tailwind';
import { colors } from './config.ts';
import { opacity } from './opacity.ts';
import { styled } from './styled.ts';

export * from 'tailwind';
export * as sheets from 'tailwind/sheets';

export const config: Configuration = {
  darkMode: 'media',
  mode: 'silent',
  theme: {
    colors,
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    screens: {
      m2xl: { min: 'calc(1800em / 16)' },
      '2xl': { max: 'calc(1800em / 16)' },
      mxl: { min: 'calc(1400em / 16)' },
      xl: { max: 'calc(1400em / 16)' },
      mlg: { min: 'calc(1200em / 16)' },
      lg: { max: 'calc(1200em / 16)' },
      mmd: { min: 'calc(900em / 16)' },
      md: { max: 'calc(900em / 16)' },
      msm: { min: 'calc(600em / 16)' },
      sm: { max: 'calc(600em / 16)' },
      mxs: { min: 'calc(400em / 16)' },
      xs: { max: 'calc(400em / 16)' },
      xxs: { max: 'calc(360em / 16)' },

      'height-sm': { raw: '(max-height: calc(700em / 16))' },
    },
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '22': '5.5rem',
        '45': '11.25rem',
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
    background-color: ${colors.black};
  }

  ::selection {
    background-color: ${colors.primary + opacity(0.25)};
  }
`;

if (IS_BROWSER) setup(config);
