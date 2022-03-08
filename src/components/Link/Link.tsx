import type { ReactChild } from 'react';

export function Link({ children, href }: { children: ReactChild; href: string }) {
  return <a href={href}>{children}</a>;
}
