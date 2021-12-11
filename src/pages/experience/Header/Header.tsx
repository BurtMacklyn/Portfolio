import React from 'react';

import HeaderTag from './HeaderTag';
import HeaderTitle from './HeaderTitle';
import HeaderString from './HeaderString';
import HeaderGlow from './HeaderGlow';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <HeaderTag />
      <HeaderString />
      <HeaderTitle />
      <HeaderTag close />
      <HeaderGlow />
    </header>
  );
}
