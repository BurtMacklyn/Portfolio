import React from 'react';
import Link from 'next/link';

export default function CustomLink({ children, href }: { children: React.ReactNode; href: string }): JSX.Element {
  return (
    <Link passHref scroll={false} href={href}>
      {children}
    </Link>
  );
}
