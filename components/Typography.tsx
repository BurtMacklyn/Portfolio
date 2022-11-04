/** @jsx h */
import { h } from 'preact';
import { tw } from 'style';

interface Props {
  variant: 'h1' | 'h2' | 'h3' | 'p' | 'code' | 'codeBlock' | 'bold';
  children: any;
  class?: string;
}

export const Typography = (props: Props) => {
  if (props.variant === 'h1')
    return <h1 class={tw`${props.class} font-bold text-8xl sm:text-7xl xxs:text-6xl tracking-tighter leading-none`}>{props.children}</h1>;
  if (props.variant === 'h2') return <h2 class={tw`${props.class} font-semibold text-5xl tracking-tighter leading-none`}>{props.children}</h2>;
  if (props.variant === 'h3') return <h3 class={tw`${props.class} tracking-tighter font-semibold text-2xl leading-none`}>{props.children}</h3>;
  if (props.variant === 'p') return <p class={tw`${props.class}font-normal leading-relaxed tracking-tight  w-full max-w-[42rem] text-g80`}>{props.children}</p>;
  if (props.variant === 'code') return <code class={tw`${props.class} text-g50 text-mono`}>{props.children}</code>;
  if (props.variant === 'bold') return <span class={tw`${props.class} text-white font-bold`}>{props.children}</span>;
  if (props.variant === 'codeBlock') return <pre class={tw`${props.class} text-g50 text-mono`}>{props.children}</pre>;
  return <span />;
};

export const Link = (props: { href: string; class?: string; children: any; newTab?: boolean }) => (
  <a href={props.href} target={props.newTab ? '_blank' : undefined} class={tw`${props.class} text-white hover:text-primary transition cursor-pointer`}>
    {props.children}
  </a>
);

export const SectionTitle = ({ children }: any) => (
  <Typography variant="h2" class={tw`lowercase mb-6`}>
    {children}
    <span class={tw`text-primary`}>{'.'}</span>
  </Typography>
);
