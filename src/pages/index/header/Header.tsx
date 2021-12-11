import React from 'react';

import Socials from './Socials';
import Nav from '@components/Nav/Main';

import Tag from './Tag';
import Glow from './Glow';
import String from './String';
import Name from './Name';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <Nav />

      <div className="header__contents">
        <Tag />

        <div className="header__sub-contents">
          <String number={1} />
          <Name />
          <Glow />
          <String number={2} />
        </div>

        <Tag close />
      </div>

      <Socials />
    </header>
  );
}
