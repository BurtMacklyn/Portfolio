import React from 'react';

import Header from './Header';

import Tag from './Tag';
import Glow from './Glow';
import String from './String';
import Name from './Name';

export default function Layout(): JSX.Element {
  return (
    <Header>
      <Tag />
      <div className="header__sub-contents">
        <String i={1} />
        <Name />
        <Glow />
        <String i={2} />
      </div>
      <Tag close />
    </Header>
  );
}
