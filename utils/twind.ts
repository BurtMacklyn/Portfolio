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
      primary: '#B030FF',
      secondary: '#009BD4',
      g8: '#141414',
      g40: '#666666',
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
    },
    extend: {
      spacing: {
        '22': '5.5rem',
        '45': '11.25rem',
      },
      animation: {
        'slide-left': 'slide-left .15s ease-in-out both',
        'slide-right': 'slide-right .15s ease-in-out both',
        'fade-in': 'fade .15s ease-in-out both',
        'fade-out': 'fade .15s ease-in-out both reverse',
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

if (IS_BROWSER) setup(config);
