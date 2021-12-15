import React from 'react';
import Link from 'src/components/Link';
import * as icons from 'react-ionicons';

export default function MenuLink({ active = '', name }: { active: string; name: string }): JSX.Element {
  return (
    <Link href={name === 'Overview' ? '/' : `/${name.toLowerCase()}`}>
      <a title={name} className={`menu__btn menu__btn--${name.toLowerCase()} ${active === name.toLowerCase() ? 'menu__btn--active' : ''}`}>
        {name === 'Overview' && <icons.HomeOutline color={'inherit'} title={name} />}
        {name === 'Experience' && <icons.TerminalOutline color={'inherit'} title={name} />}
        {name === 'Projects' && <icons.RocketOutline color={'inherit'} title={name} />}
        {name === 'About' && <icons.PersonOutline color={'inherit'} title={name} />}
        {name === 'Top' && <icons.ChevronUpOutline color={'inherit'} title={name} />}
      </a>
    </Link>
  );
}
