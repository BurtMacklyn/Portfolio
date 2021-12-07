import React from 'react';

import Tag from '../../components/Tag';
import { header } from '../../content/experience';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <Tag name="header" className="header__tag header__tag--1" />
      <code className="header__string">{header.string}</code>
      <h1 className="header__title">{header.title}</h1>
      <Tag name="header" className="header__tag header__tag--2" closeTag />
      <div className="header__glow"></div>
    </header>
  );
}
