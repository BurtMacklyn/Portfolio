import type React from 'react';

import { Glow, Nav } from 'source/components';
import { Socials } from './Socials';
import { Contents } from './Contents';

export function Header() {
  return (
    <header>
      <Nav />
      <Contents />
      <Glow />
      <Socials />
    </header>
  );
}
