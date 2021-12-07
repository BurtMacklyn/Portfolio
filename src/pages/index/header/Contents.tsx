import React from 'react';

import Tag from '@components/Tag';

import { header } from '@content/index';

export default function Contents(): JSX.Element {
  return (
    <div className="header__contents">
      <Tag name="header" className="header__tag header__tag--open" />
      <div className="header__sub-contents">
        <code className="header__string header__string--1">{header.tag1}</code>
        <h1 className="header__name">
          {header.firstname} <br className="name-break" /> {header.lastname}
        </h1>
        <div className="header__glow"></div>
        <code className="header__string header__string--2">{header.tag2}</code>
      </div>
      <Tag name="header" className="header__tag header__tag--close" closeTag />
    </div>
  );
}
