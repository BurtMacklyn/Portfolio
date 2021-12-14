import React from 'react';
import Link from 'src/components/Link';

export default function NavLink({ name, href }: { name: string; href?: string }): JSX.Element {
  return (
    <li className={`nav__link nav__link--${name.toLowerCase()}`}>
      <Link href={href ?? `/${name.toLowerCase()}`}>{name}</Link>
    </li>
  );
}
