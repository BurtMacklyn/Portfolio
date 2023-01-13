/** @jsx h */
import { Typography } from 'c/Typography.tsx';
import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import { tw } from 'style';
import { config } from 'config';
import { opacity } from 'lib/opacity.ts';

export interface Props {
  title: string;
  description: string;
  clickable?: boolean;
  href?: string;
  className?: string;
  hover: boolean;
  target: {
    x: number;
    y: number;
  };
}

export default function Card({
  title,
  description,
  href,
  className,
  target,
  hover,
  ...props
}: Props & any) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const card = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const rect = card.current?.getBoundingClientRect()!;
    setX(target.x - rect.left);
    setY(target.y - rect.top);
  }, [target]);

  return (
    <a
      ref={card}
      href={href || ''}
      target="_blank"
      class={className}
      {...props}>
      <div class={tw`relative w-full h-full card group transition-all rounded`}>
        <div
          style={{
            background: `radial-gradient(${
              hover ? '200px' : '0px'
            } circle at ${x}px ${y}px, ${opacity(
              config.colors.primary,
              0.6,
            )}, ${config.colors.greyscale[8]})`,
          }}
          class={tw`rounded transition duration-200 group-hover:opacity-[1] top-0 left-0 z-[1] absolute w-full h-full`}></div>

        <div
          class={tw`rounded z-[3] top-[1px] left-[1px] relative py-9 px-6 flex flex-col gap-x18 h-[calc(100%-2px)] w-[calc(100%-2px)] bg-black`}>
          <div
            style={{
              background: `radial-gradient(600px circle at ${x}px ${y}px, ${opacity(
                config.colors.primary,
                0.2,
              )}, transparent 40%)`,
            }}
            class={tw`transition duration-200	rounded group-hover:opacity-[1] top-0 left-0 z-[2] absolute opacity-0 w-full h-full`}
          />

          <Typography variant="h3">{title}</Typography>
          <Typography variant="p" class={tw`tracking-tighter leading`}>
            {description}
          </Typography>
        </div>
      </div>
    </a>
  );
}
