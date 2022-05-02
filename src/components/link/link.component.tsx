import type { HTMLAttributes, ReactChild } from 'react';
import NextLink from 'next/link';

interface Props {
  children: ReactChild | ReactChild[];
  href: string;
  newTab?: boolean;
}

// eslint-disable-next-line no-undef
export const Link: React.FC<Props & HTMLAttributes<HTMLAnchorElement>> = ({ children, href, newTab, ...props }) => (
  <NextLink {...props} href={href} passHref scroll>
    <a {...props} rel="noopener" target={newTab ? '_blank' : ''} style={{ textDecoration: 'none', color: 'inherit', ...props.style }}>
      {children}
    </a>
  </NextLink>
);
