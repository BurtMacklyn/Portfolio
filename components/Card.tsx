/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

interface Props {
  title: string;
  description: string;
  clickable?: boolean;
  href?: string;
  className?: string;
}

export default function Card({ title, description, clickable, href, className }: Props) {
  return (
    <a
      href={href || ''}
      target="_blank"
      class={tw`transition-all py-9 px-6 flex flex-col gap-4.5 rounded border-1 border-g8 ${clickable && 'hover:border-primary select-none'} ${className}`}>
      <p class={tw`tracking-tighter font-semibold text-2xl leading-none`}>{title}</p>
      <p class={tw`tracking-tighter leading`}>{description}</p>
    </a>
  );
}
