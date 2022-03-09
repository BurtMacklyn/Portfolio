import type { HTMLAttributes, ReactChild } from 'react';
import Link from 'next/link';

function _Link({ children, href, ...props }: { children: ReactChild | ReactChild[]; href: string } & HTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link {...props} href={href} passHref scroll={false}>
      <a {...props} style={{ textDecoration: 'none', color: 'inherit', ...props.style }}>
        {children}
      </a>
    </Link>
  );
}

export { _Link as Link };
