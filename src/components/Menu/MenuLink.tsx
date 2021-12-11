import React from 'react';
import Link from 'next/link';
import * as icons from 'react-ionicons';

export default function MenuLink({ active = '', name, i }: { active: string; name: string; i: number }): JSX.Element {
  return (
    <li className={`menu__btn--${i}`}>
      <Link href={name === 'Overview' ? '/' : `/${name.toLowerCase()}`}>
        <a
          href={name === 'Overview' ? '/' : `/${name.toLowerCase()}`}
          title={name}
          className={`menu__btn menu__btn--${name.toLowerCase()} ${active === name.toLowerCase() ? 'menu__btn--active' : ''}`}
        >
          {name === 'Overview' && <icons.HomeOutline color={'inherit'} title={name} />}
          {name === 'Experience' && <icons.TerminalOutline color={'inherit'} title={name} />}
          {name === 'Projects' && <icons.RocketOutline color={'inherit'} title={name} />}
          {name === 'About' && <icons.PersonOutline color={'inherit'} title={name} />}
          {name === 'Top' && <icons.ChevronUpOutline color={'inherit'} title={name} />}
        </a>
      </Link>
    </li>
  );
}
