/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { tw } from 'style';
import { colors } from '../lib/config.ts';
import { opacity } from '../lib/opacity.ts';

import { Typography } from 'c/Typography.tsx';

interface Props {
  children: any;
  href?: string;
  class?: string;
  new?: boolean;
  onClick?: () => any;
}

export default function Button(props: Props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [hover, setHover] = useState(false);

  return (
    <AorButton {...props}>
      <div
        class={tw`relative w-full h-full card group transition-all rounded`}
        onMouseMove={e => {
          const rect = (e.target as HTMLDivElement).getBoundingClientRect();
          setX(e.clientX - rect.left);
          setY(e.clientY - rect.top);
        }}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}>
        <div
          style={{
            background: `radial-gradient(${hover ? '200px' : '0px'} circle at ${x}px ${y}px, ${colors.primary + opacity(0.8)}, ${colors.g8})`,
          }}
          class={tw`rounded transition duration-200 group-hover:opacity-[1] top-0 left-0 z-[1] absolute w-full h-full`}></div>

        <div class={tw`rounded z-[3] top-[1px] left-[1px] relative py-3 px-4.5 flex flex-col gap-4.5 h-[calc(100%-2px)] w-[calc(100%-2px)] bg-black`}>
          <div
            style={{
              background: `radial-gradient(200px circle at ${x}px ${y}px, ${colors.primary + opacity(0.2)}, transparent 40%)`,
            }}
            class={tw`transition duration-200	rounded group-hover:opacity-[1] top-0 left-0 z-[2] absolute opacity-0 w-full h-full`}
          />

          <Typography variant="p">{props.children}</Typography>
        </div>
      </div>
    </AorButton>
  );
}

const AorButton = (props: { href?: string; class?: string; children: any; new?: boolean; onClick?: () => any }) => {
  if (props.href)
    return (
      <a
        href={props.href}
        target={props.new ? '_blank' : undefined}
        onClick={e => {
          if (props.onClick) {
            e.preventDefault();
            props.onClick();
          }
        }}
        class={props.class}>
        {props.children}
      </a>
    );
  return (
    <button
      onClick={e => {
        if (props.onClick) {
          e.preventDefault();
          props.onClick();
        }
      }}
      class={props.class}>
      {props.children}
    </button>
  );
};
