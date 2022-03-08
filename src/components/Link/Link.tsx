import type { HTMLAttributes, ReactChild } from 'react';

export function Link({ children, href, ...props }: { children: ReactChild; href: string } & HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} href={href}>
      {children}
    </a>
  );
}
