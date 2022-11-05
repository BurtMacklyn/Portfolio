/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

import { useState } from 'preact/hooks';

interface Props {
  cards: {
    Component: any;
    props: { [key: string]: any };
  }[];
}

export default function CoolCards(props: Props) {
  const cardClass = tw`flex-grow-1 flex-shrink-1`;
  // const cardClass = tw`flex-grow-1 flex-shrink-1 basis-96`;

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
      {props.cards.map(({ Component, props }: any) => (
        <Component {...props} className={cardClass} target={target} hover={hover} />
      ))}
    </div>
  );
}
