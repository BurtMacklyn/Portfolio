import { IS_BROWSER } from 'fresh/runtime.ts';
import { Configuration, setup } from 'tailwind';
import { styled } from './styled.ts';

export * from 'tailwind';
export * as sheets from 'tailwind/sheets';

export const config: Configuration = {
  darkMode: 'media',
  mode: 'silent',
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      primary: '#B030FF',
      secondary: '#00C2FF',
      tertiary: '#FF5530',
      g4: '#0A0A0A',
      g6: '#0F0F0F',
      g8: '#141414',
      g50: '#808080',
      g60: '#999999',
      g80: '#cccccc',
    },
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
    background-color: ${(config?.theme?.colors as any)?.black};
  }
`;

if (IS_BROWSER) setup(config);
