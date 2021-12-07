import React from 'react';

import Tag from '@components/Tag';

export default function Card(props: { title: string; content: string }): JSX.Element {
  return (
    <div className="card__wrapper">
      <div className="card">
        <Tag name="div" className="card__tag card__tag--open" closeTag />
        <div className="card__content">
          <p className="card__heading">{props.title}</p>
          <p className="card__text">{props.content}</p>
        </div>
        <Tag name="div" className="card__tag card__tag--close" closeTag />
      </div>
    </div>
  );
}
