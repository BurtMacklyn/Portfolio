import type React from 'react';

import { Glow, Nav, Signature } from 'source/components';
import { Socials } from './Socials';
import { Contents } from './Contents';
import { pallette } from 'source/config';

export function Header() {
  return (
    <header>
      <Nav />
      <Signature color={pallette.grey} />
      <Contents />
      <Glow />
      <Socials />
    </header>
  );
}
