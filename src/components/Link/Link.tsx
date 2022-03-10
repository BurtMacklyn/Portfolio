import type { HTMLAttributes, ReactChild } from 'react';
import Link from 'next/link';

function _Link({
  children,
  href,
  newTab,
  ...props
}: { children: ReactChild | ReactChild[]; href: string; newTab?: boolean } & HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link {...props} href={href} passHref scroll={false}>
      <a {...props} target={newTab ? '_blank' : ''} style={{ textDecoration: 'none', color: 'inherit', ...props.style }}>
        {children}
      </a>
    </Link>
  );
}

export { _Link as Link };
