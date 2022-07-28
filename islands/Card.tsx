/** @jsx h */

import { h } from 'preact';
import { tw } from '@twind';

interface Props {
  title: string;
  description: string;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Card({ title, description, clickable, onClick, className }: Props) {
  return (
    <div
      onClick={onClick}
      class={tw`transition-all py-9 px-6 flex flex-col gap-4.5 rounded border-1 border-g8 ${
        clickable && 'hover:border-primary cursor-pointer select-none'
      } ${className}`}>
      <p class={tw`tracking-tighter font-semibold text-2xl leading-none`}>{title}</p>
      <p class={tw`tracking-tighter leading-tight`}>{description}</p>
    </div>
  );
}
