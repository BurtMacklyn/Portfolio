import { h } from 'preact';

export const maxWidth = '112.5rem'; // 1800px
export const margin = 'xl:px-24 lg:px-16 md:px-12 sm:px-8 xs:px-4 mxl:px-32';
export const emailAddress = 'cooperrunyan@gmail.com';
export const email = `mailto:${emailAddress}`;

export const lastUpdated = 'October 19, 2022 1:29 PM MST';
export const version = '5.9.0';

export const navItems = [
  { name: 'overview', href: '/' },
  { name: 'contact', href: email },
  { name: 'snake', href: '/snake' },
];

export const blurred: h.JSX.CSSProperties = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(8px)',
};
