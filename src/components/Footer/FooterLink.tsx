import React from 'react';
import Link from 'src/components/Link';

export default function FooterLink({ name, href }: { name: string; href?: string }): JSX.Element {
  return (
    <li className={`footer__link footer__link--${name.toLowerCase()}`}>
      <Link passHref scroll={false} href={href ?? `/${name.toLowerCase()}`}>
        {name}
      </Link>
    </li>
  );
}
