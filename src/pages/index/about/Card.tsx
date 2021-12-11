import React from 'react';

import Tag from '@components/Tag';

export default function Card(props: { title: string; content: string }): JSX.Element {
  return (
    <div className="card__wrapper">
      <div className="card">
        <Tag className="card__tag card__tag--open">div</Tag>
        <div className="card__content">
          <p className="card__heading">{props.title}</p>
          <p className="card__text">{props.content}</p>
        </div>
        <Tag className="card__tag card__tag--close">/div</Tag>
      </div>
    </div>
  );
}
