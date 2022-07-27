/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

interface Props {
  variant: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  style?: string;
  children: any;
}

const Typography = ({ variant, children, style }: Props) => {
  if (variant === 'p') return <p class={tw`font-mono max-w-3xl text-base ${style}`}>{children}</p>;
  if (variant === 'h1') return <h1 class={tw`font-sans text-8xl tracking-tighter leading-tight ${style}`}>{children}</h1>;
  if (variant === 'h2') return <h2 class={tw`font-sans text-6xl tracking-tighter leading-tight ${style}`}>{children}</h2>;
  if (variant === 'h3') return <h3 class={tw`font-sans text-5xl tracking-tighter leading-tight ${style}`}>{children}</h3>;
  if (variant === 'h4') return <h4 class={tw`font-sans text-4xl tracking-tight leading-tight font-semibold ${style}`}>{children}</h4>;
  if (variant === 'h5') return <h5 class={tw`font-sans text-2xl tracking-normal leading-tight font-semibold ${style}`}>{children}</h5>;
  throw null;
};

export default Typography;
