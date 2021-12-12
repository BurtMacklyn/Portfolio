import React from 'react';
import Link from 'next/link';

export default function FooterLink({ name, href }: { name: string; href?: string }): JSX.Element {
  name = name.toLowerCase();
  return (
    <li className={`footer__link footer__link--${name}`}>
      <Link passHref scroll={false} href={href ?? `/${name}`}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Link>
    </li>
  );
}
