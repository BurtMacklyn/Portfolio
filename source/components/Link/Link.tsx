import type React from 'react';
import NextLink from 'next/link';

export function Link({ children, href, newTab, style }: { children: React.ReactNode; href: string; newTab?: boolean; style?: React.CSSProperties }) {
  return (
    <NextLink passHref scroll={false} href={href}>
      <a target={newTab ? '_blank' : ''} style={style}>
        {children}
      </a>
    </NextLink>
  );
}
