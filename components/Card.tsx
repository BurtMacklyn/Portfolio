/** @jsx h */
import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { tw } from 'style';

interface Props {
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

export default function Card({ title, description, href, className, target, hover }: Props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const card = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const rect = card.current?.getBoundingClientRect()!;
    setX(target.x - rect.left);
    setY(target.y - rect.top);
  }, [target]);

  return (
    <a ref={card} href={href || ''} target="_blank" class={className}>
      <div class={tw`relative w-full h-full card group transition-all rounded select-none`}>
        <div
          style={{
            background: hover ? `radial-gradient(300px circle at ${x}px ${y}px, rgba(176, 48, 255, .6), #141414)` : '#141414',
          }}
          class={tw`rounded group-hover:opacity-[1] top-0 left-0 z-[1] absolute w-full h-full`}></div>

        <div
          class={tw`rounded card-content z-[3] top-[1px] left-[1px] relative py-9 px-6 flex flex-col gap-4.5 h-[calc(100%-2px)] w-[calc(100%-2px)] bg-black`}>
          <div
            style={{
              background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(176, 48, 255, .12), transparent 40%)`,
            }}
            class={tw`rounded transition-all group-hover:opacity-[1] top-0 left-0 z-[2] absolute opacity-0 w-full h-full`}></div>

          <p class={tw`tracking-tighter font-semibold text-2xl leading-none`}>{title}</p>
          <p class={tw`tracking-tighter leading`}>{description}</p>
        </div>
      </div>
    </a>
  );
}
