import { h } from 'preact';

export const maxWidth = '112.5rem'; // 1800px
export const margin = 'xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-4 mxl:px-32';
export const emailAddress = 'cooperrunyan@gmail.com';
export const email = `mailto:${emailAddress}`;

export const lastUpdated = 'November 5, 2022 8:31 AM MST';
export const version = '5.11.1';

export const navItems = [
  { name: 'overview', href: '/' },
  { name: 'contact', href: email },
  { name: 'snake', href: '/snake' },
];

export const blurred: h.JSX.CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(8px)',
};

export const colors = {
  black: '#000',
  white: '#fff',
  primary: '#009dff',
  secondary: '#bd30ff',
  tertiary: '#ff442c',
  g4: '#0A0A0A',
  g6: '#0F0F0F',
  g8: '#141414',
  g50: '#808080',
  g60: '#999999',
  g80: '#cccccc',
};
