/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

import type { Props as CardProps } from 'i/Card.tsx';

import Card from 'i/Card.tsx';
import { useState } from 'preact/hooks';

interface Props {
  cards: Partial<CardProps>[];
}

export default function CardSection(props: Props) {
  const cardClass = tw`flex-grow-1 flex-shrink-1`;

  const [hover, setHover] = useState(false);
  const [target, setTarget] = useState({ x: 0, y: 0 });

  return (
    <div
      class={tw`flex flex-wrap flex-row gap-2`}
      onMouseMove={e => {
        setTarget({ x: e.clientX, y: e.clientY });
        setHover(true);
      }}
      onMouseOut={() => setHover(false)}>
      {props.cards.map(props => (
        <Card
          {...props}
          className={cardClass}
          target={target}
          hover={hover}
          style={{ flexBasis: `24rem` }}
        />
      ))}
    </div>
  );
}
